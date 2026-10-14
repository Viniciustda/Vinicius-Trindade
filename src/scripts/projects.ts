// ── Projects carousel ──────────────────────────────────
// Reaching the section holds the page still (scroll-freeze.ts) and the scroll plays the cards
// sideways instead; once the last card is in view the page moves on. Where the cards don't fit
// on screen, or the user asked for reduced motion, nothing is held and the carousel is moved
// with the arrows, the keyboard or by dragging.
import { makeDraggable } from './drag';
import {
	freezeRange,
	isHolding,
	navHeight,
	offsetInContent,
	reducedMotion,
	scrollToY,
	setFreeze,
	viewportHeight,
} from './scroll-freeze';

const EDGE = 16; // px kept free around the section while the page is held
const SMOOTHING = 50; // ms the cards take to catch up with the scroll position
const FLICK = 0.4; // px/ms; a faster release moves on to the neighbouring card

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function initProjects(section: HTMLElement, viewport: HTMLElement, track: HTMLElement) {
	const cards = Array.from(track.querySelectorAll<HTMLElement>('.project-card'));
	if (!cards.length) return;
	const progress = section.querySelector<HTMLElement>('[data-projects-progress]');
	const counter = section.querySelector<HTMLElement>('[data-projects-counter]');
	const prev = section.querySelector<HTMLButtonElement>('[data-projects-prev]');
	const next = section.querySelector<HTMLButtonElement>('[data-projects-next]');
	const lastIndex = cards.length - 1;

	let travel = 0; // how far the track can move, px
	let room = 0; // visible width the cards slide through, px
	let frozen = false; // true when the page scroll drives the track
	let target = 0; // where the track should be
	let current = 0; // where it is drawn
	let active = -1;
	let dragging = false;
	let raf = 0;
	let lastFrame = 0;

	section.classList.add('is-enhanced');

	// ── Drawing ───────────────────────────────────────
	const paint = () => {
		track.style.transform = `translate3d(${-current}px, 0, 0)`;
		const fraction = travel ? clamp(current / travel, 0, 1) : 0;
		if (progress) progress.style.width = `${fraction * 100}%`;
		const index = Math.round(fraction * lastIndex);
		if (index !== active) {
			cards[active]?.classList.remove('is-active');
			cards[index].classList.add('is-active');
			active = index;
			if (counter) counter.textContent = String(index + 1);
		}
		if (prev) prev.disabled = target <= 0.5;
		if (next) next.disabled = target >= travel - 0.5;
	};

	const tick = (now: number) => {
		// a frame's timestamp can be slightly earlier than the performance.now() it was requested at
		const dt = clamp(now - lastFrame, 0, 64);
		lastFrame = now;
		const gap = target - current;
		if (dragging || reducedMotion.matches || Math.abs(gap) < 0.5) current = target;
		else current += gap * (1 - Math.exp(-dt / SMOOTHING));
		paint();
		raf = current === target ? 0 : requestAnimationFrame(tick);
	};

	const moveTo = (offset: number) => {
		target = clamp(offset, 0, travel);
		if (raf) return;
		lastFrame = performance.now();
		raf = requestAnimationFrame(tick);
	};

	// ── Navigation ────────────────────────────────────
	// Each card has a stop; the stops are spread evenly over the track's travel.
	const stopOf = (index: number) => (lastIndex ? (clamp(index, 0, lastIndex) / lastIndex) * travel : 0);
	const position = () => (travel ? (target / travel) * lastIndex : 0);

	/** While the page is held, the carousel is moved by scrolling the page. */
	const goTo = (offset: number, smooth = true) => {
		if (!frozen) return moveTo(offset);
		const { start, distance } = freezeRange();
		scrollToY(start + (travel ? clamp(offset, 0, travel) / travel : 0) * distance, smooth);
	};

	const step = (direction: 1 | -1) => {
		const index = direction > 0 ? Math.floor(position() + 0.01) + 1 : Math.ceil(position() - 0.01) - 1;
		goTo(stopOf(index));
	};

	const sync = () => {
		const { start, distance } = freezeRange();
		if (!frozen || !distance) return;
		moveTo(clamp((window.scrollY - start) / distance, 0, 1) * travel);
	};
	window.addEventListener('scroll', sync, { passive: true });

	prev?.addEventListener('click', () => step(-1));
	next?.addEventListener('click', () => step(1));

	window.addEventListener('keydown', (e) => {
		if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
		if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || !travel) return;
		const focused = document.activeElement;
		const inside = section.contains(focused);
		const elsewhere = focused?.closest('input, textarea, select, [contenteditable], dialog, .h-carousel-track');
		if (!inside && (elsewhere || !isHolding())) return;
		e.preventDefault();
		step(e.key === 'ArrowRight' ? 1 : -1);
	});

	// ── Dragging ──────────────────────────────────────
	let dragFrom = 0;
	let dragLive = false; // false when the drag began with the section away from its held position
	makeDraggable(viewport, {
		onStart: () => {
			dragging = true;
			dragFrom = target;
			dragLive = !frozen || isHolding();
		},
		onMove: (dx) => {
			if (!dragLive) return;
			goTo(dragFrom - dx, false);
			sync();
		},
		onEnd: (dx, velocity) => {
			dragging = false;
			if (!travel) return;
			if (!dragLive) {
				if (Math.abs(dx) > 30) step(dx < 0 ? 1 : -1);
				return;
			}
			// settle on the nearest card, or on the neighbour in the direction of a flick
			let index = Math.round(position());
			if (velocity < -FLICK) index = Math.floor(position()) + 1;
			else if (velocity > FLICK) index = Math.ceil(position()) - 1;
			goTo(stopOf(index));
		},
	});
	// with overflow: hidden (no overflow: clip support) focus could still scroll the viewport
	viewport.addEventListener('scroll', () => {
		viewport.scrollLeft = 0;
	});

	// ── Keyboard focus ────────────────────────────────
	// Tabbing into a card that is off to the side brings it into view.
	section.addEventListener('focusin', (e) => {
		const el = e.target;
		// (the section itself only gets focus from an in-page link, which does its own scrolling)
		if (!(el instanceof HTMLElement) || el === section || !el.matches(':focus-visible')) return;
		const card = el.closest<HTMLElement>('.project-card');
		let offset = target;
		if (card) {
			const left = card.offsetLeft;
			const right = left + card.offsetWidth;
			if (left < target) offset = left;
			else if (right > target + room) offset = right - room;
		}
		if (offset !== target || (frozen && !isHolding())) goTo(offset, false);
	});

	// ── Layout ────────────────────────────────────────
	const measure = () => {
		const style = getComputedStyle(viewport);
		room = viewport.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
		travel = Math.max(0, Math.round(track.offsetWidth - room));
		current = Math.min(current, travel);
		section.classList.toggle('is-static', travel === 0);

		const available = viewportHeight() - navHeight();
		const sectionHeight = section.offsetHeight;
		// the part that must stay visible while the page is held: cards + controls
		const stageHeight = section.getBoundingClientRect().bottom - track.getBoundingClientRect().top;

		frozen = travel > 0 && !reducedMotion.matches && stageHeight + 2 * EDGE <= available;
		if (!frozen) {
			setFreeze(null);
			moveTo(target);
			return;
		}
		// Centre the section below the navbar. If it is too tall for that, let its heading slide
		// under the navbar so the cards and controls remain fully visible.
		const top =
			sectionHeight + 2 * EDGE <= available
				? navHeight() + (available - sectionHeight) / 2
				: viewportHeight() - EDGE - sectionHeight;
		setFreeze({
			at: offsetInContent(section) - top,
			length: Math.max(travel * 1.5, Math.min(travel * 3, available * 0.5)),
			by: section,
		});
		sync();
	};

	let pending = 0;
	const remeasure = () => {
		cancelAnimationFrame(pending);
		pending = requestAnimationFrame(measure);
	};
	const observer = new ResizeObserver(remeasure);
	for (const el of [section.closest('.scroll-freeze-content'), document.querySelector('[data-site-nav]'), viewport, track]) {
		if (el) observer.observe(el);
	}
	window.addEventListener('resize', remeasure);
	reducedMotion.addEventListener('change', remeasure);

	measure();
	paint();
}

const section = document.querySelector<HTMLElement>('[data-projects]');
const viewport = section?.querySelector<HTMLElement>('[data-projects-viewport]');
const track = section?.querySelector<HTMLElement>('[data-projects-track]');
if (section && viewport && track) initProjects(section, viewport, track);

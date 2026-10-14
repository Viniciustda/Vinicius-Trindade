// ── Horizontal carousels (.h-carousel-wrap): side arrows, drag-to-scroll, keyboard ──
import { makeDraggable } from './drag';
import { reducedMotion } from './scroll-freeze';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

document.querySelectorAll<HTMLElement>('[data-hcarousel]').forEach((wrap) => {
	const track = wrap.querySelector<HTMLElement>('.h-carousel-track');
	const prev = wrap.querySelector<HTMLButtonElement>('[data-hcarousel-prev]');
	const next = wrap.querySelector<HTMLButtonElement>('[data-hcarousel-next]');
	if (!track) return;

	const cards = () => Array.from(track.querySelectorAll<HTMLElement>('.h-carousel-card'));
	const maxScroll = () => track.scrollWidth - track.clientWidth;
	const behavior = (): ScrollBehavior => (reducedMotion.matches ? 'instant' : 'smooth');

	/** Scroll positions at which a card sits flush with the left edge. */
	const snapPoints = () => {
		const inset = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
		return cards().map((card) => clamp(card.offsetLeft - inset, 0, maxScroll()));
	};
	const nearestSnap = (left: number) =>
		snapPoints().reduce((best, point) => (Math.abs(point - left) < Math.abs(best - left) ? point : best), 0);

	// ── Arrows ────────────────────────────────────────
	const update = () => {
		if (prev) prev.disabled = track.scrollLeft <= 1;
		if (next) next.disabled = track.scrollLeft >= maxScroll() - 1;
	};
	/** Move by as many whole cards as fit in view. */
	const page = (direction: 1 | -1) => {
		const [first, second] = cards();
		const cardStep = first && second ? second.offsetLeft - first.offsetLeft : track.clientWidth;
		const visible = Math.max(1, Math.floor(track.clientWidth / cardStep));
		track.scrollTo({ left: nearestSnap(track.scrollLeft + direction * visible * cardStep), behavior: behavior() });
	};
	prev?.addEventListener('click', () => page(-1));
	next?.addEventListener('click', () => page(1));
	track.addEventListener('scroll', update, { passive: true });
	new ResizeObserver(update).observe(track);
	update();

	// ── Keyboard ──────────────────────────────────────
	track.addEventListener('keydown', (e) => {
		if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
		e.preventDefault();
		const points = snapPoints();
		const here = track.scrollLeft;
		const target =
			e.key === 'ArrowRight' ? points.find((point) => point > here + 1) : points.findLast((point) => point < here - 1);
		if (target !== undefined) track.scrollTo({ left: target, behavior: behavior() });
	});
	// Tabbing to a card: the browser scrolls it into view, but snapping can then pull it half
	// out again. Rest on that card's own snap point instead.
	track.addEventListener('focusin', (e) => {
		const card = e.target instanceof HTMLElement && e.target.matches(':focus-visible') ? e.target.closest<HTMLElement>('.h-carousel-card') : null;
		if (!card) return;
		requestAnimationFrame(() => {
			const view = track.getBoundingClientRect();
			const box = card.getBoundingClientRect();
			if (box.left >= view.left - 1 && box.right <= view.right + 1) return;
			track.scrollTo({ left: snapPoints()[cards().indexOf(card)], behavior: 'instant' });
		});
	});

	// ── Mouse drag (touch scrolls natively) ───────────
	let from = 0;
	let settle = 0;
	makeDraggable(track, {
		pointerTypes: ['mouse'],
		onStart: () => {
			clearTimeout(settle);
			from = track.scrollLeft;
			// snapping would fight the pointer; it comes back once the release has settled
			track.style.scrollSnapType = 'none';
		},
		onMove: (dx) => {
			track.scrollLeft = from - dx;
		},
		onEnd: (_dx, velocity) => {
			// carry a little momentum, then rest on a card edge
			track.scrollTo({ left: nearestSnap(track.scrollLeft - velocity * 180), behavior: behavior() });
			settle = window.setTimeout(() => {
				track.style.scrollSnapType = '';
			}, 600);
		},
	});
});

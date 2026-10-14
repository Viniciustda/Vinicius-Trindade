// ── Scroll freeze ───────────────────────────────────────
// The page content lives in a sticky wrapper (see global.css). While it is pinned, the
// scrollbar keeps moving for `distance` px but nothing moves on screen; whoever asked for the
// freeze (the projects carousel) turns that progress into its own animation.
//
// Those pixels are spent while the page stands still, so everything after the frozen spot sits
// `distance` px further down the scrollbar than the layout suggests. The browser doesn't know
// that when it jumps to an anchor or to a focused element, so both are handled here.

const root = document.querySelector<HTMLElement>('[data-scroll-freeze]');
const content = root?.querySelector<HTMLElement>('.scroll-freeze-content') ?? null;
const nav = document.querySelector<HTMLElement>('[data-site-nav]');

export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let start = 0; // scrollY at which the page freezes
let distance = 0; // px of scrolling the freeze absorbs
let owner: HTMLElement | null = null; // the element that animates meanwhile
let ownerOffset = 0; // where `owner` sits inside the content
let configured = false;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

// 100svh doesn't change while mobile browser bars slide in and out, unlike innerHeight.
const probe = document.createElement('div');
probe.style.cssText = 'position:fixed;top:0;left:0;width:0;height:100svh;visibility:hidden;pointer-events:none';
document.body.append(probe);

export const viewportHeight = () => probe.offsetHeight || window.innerHeight;
export const navHeight = () => nav?.offsetHeight ?? 0;

/** Where an element sits inside the page content — the same whatever the scroll position. */
export function offsetInContent(el: Element): number {
	return content ? el.getBoundingClientRect().top - content.getBoundingClientRect().top : 0;
}

const contentTop = () => (root ? root.getBoundingClientRect().top + window.scrollY : 0);

/** Scrollbar position that shows `contentY` px of the content scrolled away. */
const toScrollY = (contentY: number) => (contentY > start ? contentY + distance : contentY);

export const freezeRange = () => ({ start, distance });

/** True while the page is being held (the scroll position is inside the frozen stretch). */
export const isHolding = () => distance > 0 && window.scrollY >= start - 1 && window.scrollY <= start + distance + 1;

/**
 * Hold the page still once `at` px of the content have scrolled past the top of the viewport,
 * for the next `length` px of scrolling, while `by` animates. Pass null to turn it off.
 */
export function setFreeze(config: { at: number; length: number; by: HTMLElement } | null) {
	if (!root || !content) return;
	const was = { start, distance, ownerOffset };
	const y = window.scrollY;

	if (config && config.length >= 1) {
		const at = Math.round(config.at);
		distance = Math.round(config.length);
		owner = config.by;
		ownerOffset = offsetInContent(owner);
		root.style.setProperty('--freeze-at', `${at}px`);
		root.style.setProperty('--freeze-distance', `${distance}px`);
		root.classList.add('is-active');
		start = contentTop() + at;
	} else {
		distance = 0;
		start = 0;
		owner = null;
		root.classList.remove('is-active');
		root.style.removeProperty('--freeze-at');
		root.style.removeProperty('--freeze-distance');
	}

	if (!configured) {
		configured = true;
		return;
	}
	// A later change (a resize, content above that changed height) moves everything from the
	// frozen spot onwards along the scrollbar, and browsers don't scroll-anchor content that sits
	// in a sticky box. Put the reader back on the same content — or, while the page is being
	// held, back on the same progress through the stretch.
	const pushed = was.distance && distance ? ownerOffset - was.ownerOffset : 0; // content above grew or shrank
	let next = y;
	if (was.distance && y > was.start + was.distance) next = y - was.distance + pushed + distance;
	else if (was.distance && y >= was.start) next = distance ? start + ((y - was.start) / was.distance) * distance : was.start;
	else if (!was.distance && y > start) next = y + distance;
	if (Math.abs(next - y) >= 1) window.scrollTo({ top: next, behavior: 'instant' });
}

// ── Scrolling to a position ────────────────────────────
let frame = 0;
let untouched = true; // no scroll input from the user yet

const interrupt = () => {
	untouched = false;
	cancelAnimationFrame(frame);
	frame = 0;
};
// Capture phase: runs before any handler that might start a new scroll from the same event.
for (const type of ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const) {
	window.addEventListener(type, interrupt, { capture: true, passive: true });
}

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Scroll the window to `target`. A jump that merely passes over the frozen stretch skips it,
 * otherwise the page would visibly stall halfway through the animation.
 */
export function scrollToY(target: number, smooth = true) {
	cancelAnimationFrame(frame);
	frame = 0;
	const from = window.scrollY;
	target = clamp(target, 0, document.documentElement.scrollHeight - window.innerHeight);
	if (!smooth || reducedMotion.matches || Math.abs(target - from) < 2) {
		window.scrollTo({ top: target, behavior: 'instant' });
		return;
	}

	const end = start + distance;
	const down = target > from;
	const crosses = distance > 0 && (down ? from < start && target > end : from > end && target < start);
	const firstLeg = crosses ? Math.abs((down ? start : end) - from) : Math.abs(target - from);
	const total = crosses ? Math.abs(target - from) - distance : firstLeg;
	const duration = clamp(300 + total * 0.25, 350, 900);
	const startTime = performance.now();

	const step = (now: number) => {
		const progress = Math.min(1, (now - startTime) / duration);
		const travelled = ease(progress) * total;
		const sign = down ? 1 : -1;
		const y = travelled <= firstLeg ? from + sign * travelled : (down ? end : start) + sign * (travelled - firstLeg);
		window.scrollTo({ top: y, behavior: 'instant' });
		frame = progress < 1 ? requestAnimationFrame(step) : 0;
	};
	frame = requestAnimationFrame(step);
}

/** Scroll so `el` rests at its scroll-margin-top, as following an anchor link would. */
export function scrollToElement(el: HTMLElement, smooth = true) {
	// The frozen section always opens at the beginning of its animation.
	if (owner?.contains(el)) return scrollToY(start, smooth);
	const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
	const y = content?.contains(el)
		? toScrollY(contentTop() + offsetInContent(el) - margin)
		: el.getBoundingClientRect().top + window.scrollY - margin;
	scrollToY(y, smooth);
}

// ── In-page links ──────────────────────────────────────
let movingFocus = false;

/** Focus `el` without the page scrolling to it (neither the browser's scroll nor the one below). */
export function focusQuietly(el: HTMLElement) {
	movingFocus = true;
	el.focus({ preventScroll: true });
	movingFocus = false;
}

document.addEventListener('click', (e) => {
	if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
	const link = e.target instanceof Element ? e.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
	const id = link ? decodeURIComponent(link.hash.slice(1)) : '';
	const target = id ? document.getElementById(id) : null;
	if (!link || !target) return;

	e.preventDefault();
	if (location.hash !== link.hash) history.pushState(null, '', link.hash);
	scrollToElement(target);

	// Take focus along, so keyboard and screen-reader users carry on from the destination.
	if (target.tabIndex < 0) target.tabIndex = -1;
	focusQuietly(target);
});

// Arriving at a URL that already has a hash: the browser's own jump ignores the freeze.
function alignToHash() {
	const [entry] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
	if (!untouched || (entry && entry.type !== 'navigate')) return; // reloads and history moves restore their own position
	const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
	if (target) scrollToElement(target, false);
}
requestAnimationFrame(alignToHash);
window.addEventListener('load', alignToHash, { once: true });

// ── Keyboard focus ─────────────────────────────────────
// When focus lands on something off-screen the browser scrolls to it, but comes up short
// if the frozen stretch lies in between (and never accounts for the sticky navbar).
document.addEventListener('focusin', (e) => {
	const el = e.target;
	if (movingFocus || !(el instanceof HTMLElement) || !content?.contains(el) || owner?.contains(el)) return;
	if (!el.matches(':focus-visible')) return;
	requestAnimationFrame(() => {
		const rect = el.getBoundingClientRect();
		const top = navHeight() + 12;
		const bottom = window.innerHeight - 12;
		if (rect.top >= top && rect.bottom <= bottom) return;
		const restAt = Math.max(top, (top + bottom - rect.height) / 2);
		scrollToY(toScrollY(contentTop() + offsetInContent(el) - restAt), false);
	});
});

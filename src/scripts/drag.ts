// ── Horizontal drag gesture (shared by the carousels) ───

export type DragHandlers = {
	/** Pointer types allowed to drag; all of them when omitted. */
	pointerTypes?: string[];
	onStart?: () => void;
	/** `dx` is the horizontal distance from where the drag began. */
	onMove: (dx: number) => void;
	/** `velocity` is in px/ms — negative when the pointer was moving left. */
	onEnd?: (dx: number, velocity: number) => void;
};

const THRESHOLD = 6; // px of mostly-horizontal travel before a press counts as a drag

export function makeDraggable(el: HTMLElement, handlers: DragHandlers) {
	let pointerId: number | null = null;
	let startX = 0;
	let startY = 0;
	let lastX = 0;
	let lastTime = 0;
	let velocity = 0;
	let dragging = false;
	let suppressClick = false;

	el.addEventListener('pointerdown', (e) => {
		suppressClick = false;
		if (handlers.pointerTypes && !handlers.pointerTypes.includes(e.pointerType)) return;
		if (e.pointerType === 'mouse' && e.button !== 0) return;
		pointerId = e.pointerId;
		startX = lastX = e.clientX;
		startY = e.clientY;
		lastTime = e.timeStamp;
		velocity = 0;
		dragging = false;
	});

	el.addEventListener('pointermove', (e) => {
		if (e.pointerId !== pointerId) return;
		const dx = e.clientX - startX;
		if (!dragging) {
			if (Math.abs(dx) < THRESHOLD || Math.abs(dx) < Math.abs(e.clientY - startY)) return;
			dragging = true;
			el.setPointerCapture(e.pointerId);
			el.classList.add('is-dragging');
			window.getSelection()?.removeAllRanges();
			handlers.onStart?.();
		}
		const dt = e.timeStamp - lastTime;
		if (dt > 0) velocity = 0.8 * ((e.clientX - lastX) / dt) + 0.2 * velocity;
		lastX = e.clientX;
		lastTime = e.timeStamp;
		handlers.onMove(dx);
	});

	const finish = (e: PointerEvent) => {
		if (e.pointerId !== pointerId) return;
		pointerId = null;
		if (!dragging) return;
		dragging = false;
		el.classList.remove('is-dragging');
		suppressClick = e.type === 'pointerup';
		// holding still before letting go is not a flick
		if (e.timeStamp - lastTime > 80) velocity = 0;
		handlers.onEnd?.(e.clientX - startX, velocity);
	};
	el.addEventListener('pointerup', finish);
	el.addEventListener('pointercancel', finish);

	// A drag that happens to end over a link must not follow it.
	el.addEventListener(
		'click',
		(e) => {
			if (!suppressClick) return;
			suppressClick = false;
			e.preventDefault();
			e.stopPropagation();
		},
		true,
	);
	// Links and images would otherwise start the browser's own drag-and-drop.
	el.addEventListener('dragstart', (e) => e.preventDefault());
}

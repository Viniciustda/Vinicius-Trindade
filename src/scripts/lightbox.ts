// ── Lightbox (certificates and achievements) ───────────
// A link marked data-lightbox='[{"src","alt"}, …]' opens its images in the shared <dialog>.
// Without JS the link simply opens the first image.

import { focusQuietly } from './scroll-freeze';

type LightboxImage = { src: string; alt: string };

const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox-dialog]');
const image = dialog?.querySelector<HTMLImageElement>('[data-lightbox-image]');

if (dialog && image) {
	const title = dialog.querySelector<HTMLElement>('[data-lightbox-title]');
	const counter = dialog.querySelector<HTMLElement>('[data-lightbox-counter]');
	const gallery = dialog.querySelectorAll<HTMLElement>('[data-lightbox-gallery]');
	let images: LightboxImage[] = [];
	let index = 0;
	let opener: HTMLElement | null = null;

	// While the lightbox is open the page behind must not scroll. The wheel has to be caught on
	// the window: over the backdrop there is no element box for the browser to attach a blocking
	// wheel handler to. (ctrl+wheel is the browser's zoom gesture and is left alone.)
	const blockWheel = (e: WheelEvent) => {
		if (!e.ctrlKey) e.preventDefault();
	};

	const show = (next: number) => {
		index = (next + images.length) % images.length;
		image.src = images[index].src;
		image.alt = images[index].alt;
		if (counter) counter.textContent = `${index + 1} / ${images.length}`;
	};

	document.addEventListener('click', (e) => {
		if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		const trigger = e.target instanceof Element ? e.target.closest<HTMLElement>('[data-lightbox]') : null;
		if (!trigger) return;
		try {
			images = JSON.parse(trigger.dataset.lightbox ?? '[]');
		} catch {
			images = [];
		}
		if (!images.length) return;

		e.preventDefault();
		opener = trigger;
		if (title) title.textContent = trigger.dataset.lightboxTitle ?? '';
		gallery.forEach((el) => {
			el.hidden = images.length < 2;
		});
		show(0);
		window.addEventListener('wheel', blockWheel, { passive: false });
		dialog.showModal();
	});

	dialog.addEventListener('click', (e) => {
		const target = e.target instanceof Element ? e.target : null;
		// the dialog element itself only receives clicks that land on the backdrop
		if (target === dialog || target?.closest('[data-lightbox-close]')) dialog.close();
		else if (target?.closest('[data-lightbox-prev]')) show(index - 1);
		else if (target?.closest('[data-lightbox-next]')) show(index + 1);
	});

	dialog.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft' && images.length > 1) show(index - 1);
		else if (e.key === 'ArrowRight' && images.length > 1) show(index + 1);
		// the scroll keys would move the page behind the lightbox too
		const scrollsPage = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key);
		if (scrollsPage || (e.key === ' ' && !(e.target instanceof HTMLButtonElement))) e.preventDefault();
	});

	dialog.addEventListener('close', () => {
		window.removeEventListener('wheel', blockWheel);
		image.removeAttribute('src');
		if (opener) focusQuietly(opener);
		opener = null;
	});
}

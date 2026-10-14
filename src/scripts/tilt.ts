// ── 3D tilt on hover (project cards, certificates, achievements, hero photo) ──
// Sets --tilt-x / --tilt-y; the transform itself lives in .tilt-card (global.css).
import { reducedMotion } from './scroll-freeze';

const MAX_TILT = 6; // degrees

document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
	card.addEventListener('pointermove', (e) => {
		if (e.pointerType !== 'mouse' || reducedMotion.matches) return;
		const rect = card.getBoundingClientRect();
		const midX = rect.width / 2;
		const midY = rect.height / 2;
		const rotateY = ((e.clientX - rect.left - midX) / midX) * MAX_TILT;
		const rotateX = ((midY - (e.clientY - rect.top)) / midY) * MAX_TILT;
		card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
		card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
	});
	card.addEventListener('pointerleave', () => {
		card.style.removeProperty('--tilt-x');
		card.style.removeProperty('--tilt-y');
	});
});

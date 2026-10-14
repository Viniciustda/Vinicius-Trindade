// ── Scroll-reveal (Intersection Observer) ──────────────
const revealOnce = (selector: string, threshold: number) => {
	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					io.unobserve(entry.target);
				}
			});
		},
		{ threshold },
	);
	document.querySelectorAll(selector).forEach((el) => io.observe(el));
};

revealOnce('[data-reveal]', 0.12);
// Animate timeline lines
revealOnce('[data-timeline-line]', 0.3);

// ── Scroll progress bar ─────────────────────────────
const bar = document.getElementById('scroll-progress');
if (bar) {
	const onScroll = () => {
		const h = document.documentElement.scrollHeight - window.innerHeight;
		bar.style.width = h > 0 ? `${(window.scrollY / h) * 100}%` : '0%';
	};
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
}

// ── Typing animation ────────────────────────────────
const typed = document.querySelector<HTMLElement>('[data-typing]');
if (typed && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	const text = typed.textContent || '';
	// hold the height the full text needs: on narrow screens it wraps, and the page below
	// would otherwise jump when the second line appears
	typed.style.minHeight = `${typed.offsetHeight}px`;
	typed.textContent = '';
	typed.classList.add('typing-cursor');
	let i = 0;
	const type = () => {
		if (i < text.length) {
			typed.textContent += text[i];
			i++;
			setTimeout(type, 40 + Math.random() * 30);
		} else {
			typed.style.minHeight = '';
			setTimeout(() => typed.classList.replace('typing-cursor', 'typing-done'), 1500);
		}
	};
	setTimeout(type, 600);
}

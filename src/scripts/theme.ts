// ── Theme toggle ───────────────────────────────────────
// The initial theme is applied by the inline script in BaseLayout, before first paint.
const storageKey = 'theme';
const root = document.documentElement;

const getIsDark = () => root.classList.contains('dark');
const setTheme = (isDark: boolean) => {
	root.classList.toggle('dark', isDark);
	root.dataset.theme = isDark ? 'dark' : 'light';
	try {
		localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
	} catch {
		// ignore
	}
};

const updateLabels = () => {
	const isDark = getIsDark();
	for (const btn of document.querySelectorAll('[data-theme-toggle]')) {
		const labelLight = btn.getAttribute('data-label-light') ?? '☀️';
		const labelDark = btn.getAttribute('data-label-dark') ?? '🌙';
		btn.textContent = isDark ? labelLight : labelDark;
	}
};

updateLabels();
document.addEventListener('click', (e) => {
	const target = e.target;
	if (!(target instanceof HTMLElement)) return;
	const btn = target.closest('[data-theme-toggle]');
	if (!btn) return;
	setTheme(!getIsDark());
	updateLabels();
});

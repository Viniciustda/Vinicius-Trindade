// ── Language menu ──────────────────────────────────────
// The menu is a <details> element, so it opens without JS; this only closes it
// on outside clicks and Escape.
const menus = document.querySelectorAll<HTMLDetailsElement>('[data-language-menu]');

document.addEventListener('click', (e) => {
	for (const menu of menus) {
		if (menu.open && !menu.contains(e.target as Node)) menu.open = false;
	}
});

document.addEventListener('keydown', (e) => {
	if (e.key !== 'Escape') return;
	for (const menu of menus) {
		if (!menu.open) continue;
		menu.open = false;
		menu.querySelector('summary')?.focus();
	}
});

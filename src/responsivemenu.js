(function() {
	const hamburgerMenu = document.querySelector("div.hamburger");
	const respMenuElements = document.querySelectorAll(
		"nav.header-nav, ul.nav-primary"
	);

	function toggleMenu(x) {
		x.classList.toggle("change");
	}

	hamburgerMenu.addEventListener("click", () => {
		toggleMenu(hamburgerMenu);
		respMenuElements.forEach(cur => cur.classList.toggle("change"));
	});
})();

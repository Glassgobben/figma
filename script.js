let lastScrollTop = 0; // Håller koll på föregående scroll-position

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
        console.log("🔼 Scrollar upp!");
    } else if (scrollTop > lastScrollTop) {
        console.log("🔽 Scrollar ner!");
    }

    lastScrollTop = scrollTop; // Uppdatera den senaste scroll-positionen
});


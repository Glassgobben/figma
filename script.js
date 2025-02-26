let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navHighlight = document.getElementsByClassName("nav_highlight");

    if (scrollTop < lastScrollTop) {
        // När användaren scrollar uppåt, visa navbar
        if (navHighlight.length === 0) {
            navbar.classList.add("nav_highlight");
        }
    } else {
        // När användaren scrollar neråt, göm navbar
        if (navHighlight.length > 0) {
            navbar.classList.remove("nav_highlight");
        }
    }

    lastScrollTop = scrollTop;
});


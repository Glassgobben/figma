let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
        // När användaren scrollar uppåt, visa navbar
        navbar.style.top = "0";
        navbar.style.position = "fixed";
    } else {
        // När användaren scrollar neråt, göm navbar
        navbar.style.top = "-100px";
        navbar.style.position = "absolut";
    }

    lastScrollTop = scrollTop;
});
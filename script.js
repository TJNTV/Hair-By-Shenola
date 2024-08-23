let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.querySelector("header").classList.add("shrink");
        document.querySelector("footer").classList.add("shrink");
    } else {
        // Scrolling up
        document.querySelector("header").classList.remove("shrink");
        document.querySelector("footer").classList.remove("shrink");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

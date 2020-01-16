function navigateTo(url) {
    window.location.href = url;
}

function toggleSiteNavigationMenu() {
    var navbar = document.getElementById("site-navbar-container");
    var isVisible = !navbar.classList.contains("collapsed-right-mobile");

    if (isVisible) {
        navbar.classList.add("collapsed-right-mobile");
        document.getElementById("site-navigation-menu").classList.add("collapsed-right-mobile");
        document.body.classList.remove("noscroll");
    } else {
        navbar.classList.remove("collapsed-right-mobile");
        document.getElementById("site-navigation-menu").classList.remove("collapsed-right-mobile");
        document.body.classList.add("noscroll");
    }
}
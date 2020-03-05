function closeSiteNavigation() {
    document.getElementById("site-navigation-menu").classList.add("hide-on-mobile");
    document.getElementById("site-navigation-menu-mobile-mask").classList.add("hide-on-mobile");
}

function openSiteNavigation() {
    document.getElementById("site-navigation-menu").classList.remove("hide-on-mobile");
    document.getElementById("site-navigation-menu-mobile-mask").classList.remove("hide-on-mobile");
}
window.onload = function() {
    document.documentElement.classList.add("loaded");
    document.documentElement.style.removeProperty("background-color");
    applyTheme();
}

function closeSiteNavigation() {
    document.getElementById("site-navigation-menu").classList.add("hide-on-mobile");
    document.getElementById("site-navigation-menu-mobile-mask").classList.add("hide-on-mobile");
}

function openSiteNavigation() {
    document.getElementById("site-navigation-menu").classList.remove("hide-on-mobile");
    document.getElementById("site-navigation-menu-mobile-mask").classList.remove("hide-on-mobile");
}

function toggleTheme() {
    var theme = sessionStorage.getItem("theme").toLowerCase();
    var newTheme = theme === "dark" ? "light" : "dark";
    sessionStorage.setItem("theme", newTheme);
    applyTheme();

}

function applyTheme() {
    switch(sessionStorage.getItem("theme").toLowerCase()) {
        case 'dark':
            document.documentElement.setAttribute("ui-theme", "dark");
            break;
        case 'light':
            document.documentElement.setAttribute("ui-theme", "light");
            break;
        default:
            break;
    }
}
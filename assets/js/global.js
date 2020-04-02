window.onload = function() {
    document.documentElement.classList.add("loaded");
    document.documentElement.style.removeProperty("background-color");
    switch(this.sessionStorage.getItem("theme").toLowerCase()) {
        case 'dark':
            this.applyDarkTheme();
            break;
        case 'light':
            this.applyLightTheme();
            break;
        default:
            break;
    }
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
            this.applyDarkTheme();
            break;
        case 'light':
            this.applyLightTheme();
            break;
        default:
            break;
    }
}

function applyDarkTheme() {
    document.documentElement.style.setProperty("--primary-background-color", "rgb(55,55,55)");
    document.documentElement.style.setProperty("--primary-color", "rgb(0,170,185)");
    document.documentElement.style.setProperty("--selected-menu-items-color", "rgb(0,110,150)");
    document.documentElement.style.setProperty("--mobile-menu-color", "rgb(40,40,40)");
    document.documentElement.style.setProperty("--mobile-selected-menu-items-color", "rgb(0,110,150)");
    sessionStorage.setItem("theme", "dark");
}

function applyLightTheme() {
    document.documentElement.style.setProperty("--primary-background-color", "rgb(245,245,245)");
    document.documentElement.style.setProperty("--primary-color", "rgb(50,50,50)");
    document.documentElement.style.setProperty("--selected-menu-items-color", "rgb(100,100,100)");
    document.documentElement.style.setProperty("--mobile-menu-color", "rgb(250,250,250)");
    document.documentElement.style.setProperty("--mobile-selected-menu-items-color", "rgb(150,150,150)");
    sessionStorage.setItem("theme", "light");
}
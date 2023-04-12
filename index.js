var loadedByTime = false;
var loadedByContent = false;

function removeMainLoader() {
    setTimeout(() => {
        var stripes = document.getElementById("loading-transition-stripes");
        stripes.style.display = "block";
        setTimeout(() => stripes.remove(), 1200);
        var loader = document.getElementById("main-loader-container");
        loader.classList.add("fade-out");
        setTimeout(() => loader.remove(), 500);
        setTimeout(() => document.getElementById("loading-page-container").remove(), 1200);
    }, 0);
}

setTimeout(() => {
    loadedByTime = true;
    if (loadedByTime && loadedByContent) {
        removeMainLoader();
    }
}, 2000);

window.onload = () => {
    loadedByContent = true;
    if (loadedByContent && loadedByTime) {
        removeMainLoader();
    }
};

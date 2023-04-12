var loadedByTime = false;
var loadedByContent = false;

function removeMainLoader() {
    var stripes = document.getElementById("loading-transition-stripes");
    var container = document.getElementById("loading-page-container");
    container.style.backgroundColor = "transparent";
    document.getElementById("loading-page-bg-left").style.display = "block";
    document.getElementById("loading-page-bg-right").style.display = "block";
    stripes.style.display = "block";
    setTimeout(() => stripes.remove(), 1200);
    var loader = document.getElementById("main-loader-container");
    loader.classList.add("fade-out");
    setTimeout(() => loader.remove(), 500);
    setTimeout(() => container.remove(), 1200);
    
}

export function checkPageLoaded(){
    loadedByContent = true;
    if (loadedByContent && loadedByTime) {
        removeMainLoader();
    }
};

setTimeout(() => {
    loadedByTime = true;
    if (loadedByTime && loadedByContent) {
        removeMainLoader();
    }
}, 2000);
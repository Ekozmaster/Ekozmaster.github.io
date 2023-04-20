
var wasOnTopOfTheScreen = true;

export function positionShortDescriptionOnScroll() {
    var viewportSize = window.innerHeight;
    if (window.pageYOffset > viewportSize * 0.5 && wasOnTopOfTheScreen) {
        var shortDescription = document.getElementById("short-description");
        shortDescription.style.marginTop = "0";
        wasOnTopOfTheScreen = false;
    } else if (window.pageYOffset < viewportSize * 0.4 && !wasOnTopOfTheScreen) {
        var shortDescription = document.getElementById("short-description");
        shortDescription.style.marginTop = "200vh";
        wasOnTopOfTheScreen = true;
    }
}

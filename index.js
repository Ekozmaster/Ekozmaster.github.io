import { positionShortDescriptionOnScroll } from "./assets/js/short-description.js";
import { checkPageLoaded } from "/assets/js/main-loader.js";

// window.onload = () => {
//     setTimeout(checkPageLoaded, 1000);
// };


window.onscroll = positionShortDescriptionOnScroll;

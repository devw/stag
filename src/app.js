require("./styles/main.scss");
require("./styles/loader.scss");
require("./styles/carousel.scss");

require("./actions");
const { APP_ID } = require("./templates/");

const node = document.createElement("div");
node.setAttribute("id", APP_ID);
document.body.append(node);

const placePopover = (e) => {
    const dom = node.querySelector(".container");
    const shift = parseInt(getComputedStyle(dom).getPropertyValue("width"));
    dom.style.setProperty("left", `${e.clientX - shift / 2}px`);
    dom.style.setProperty("top", `${e.clientY + 20}px`);
};

const $ = document.querySelector.bind(document);
const openAccount = (e) => {
    console.log("....openAccount");
    e.preventDefault();
    e.stopPropagation();
    const dom = node.querySelector(".container");
    dom.style.setProperty("display", "flex");
    if (dom.classList.contains("popover")) placePopover(e);
};
$(".site-header__account").addEventListener("click", openAccount);

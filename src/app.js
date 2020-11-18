require("./styles/main.scss");
require("./styles/loader.scss");
require("./styles/carousel.scss");

require("./actions");
const { APP_ID } = require("./templates/");

const node = document.createElement("div");
node.setAttribute("id", APP_ID);
document.body.append(node);

const $ = document.querySelector.bind(document);
const openAccount = (e) => {
    e.preventDefault();
    node.querySelector(".container").style.setProperty("display", "flex");
};
$(".site-header__account").addEventListener("click", openAccount);

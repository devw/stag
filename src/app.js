require("./styles/main.scss");
require("./styles/loader.scss");
require("./styles/carousel.scss");
require("./styles/popup.scss");
require("./styles/form.scss");

const { APP_ID } = require("./templates/");

const node = document.createElement("div");
node.setAttribute("id", APP_ID);
document.body.append(node);

const { loadTheme, showTheme } = require("./actions");
loadTheme("franklin").then(() => showTheme());

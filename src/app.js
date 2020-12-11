require("./styles/main.scss");
require("./styles/loader.scss");
require("./styles/carousel.scss");
require("./styles/dashboard.scss");

const { APP_ID } = require("./templates/");

const node = document.createElement("div");
node.setAttribute("id", APP_ID);
document.body.append(node);

const { loadTheme, showTheme } = require("./actions");
loadTheme("warehouse").then(() => showTheme());

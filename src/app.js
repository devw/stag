require("./styles/main.scss");
require("./styles/loader.scss");
require("./styles/carousel.scss");

require("./actions");
const { APP_ID } = require("./templates/");

const node = document.createElement("div");
node.setAttribute("id", APP_ID);
document.body.prepend(node);

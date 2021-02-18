require("./styles/animations.scss");
require("./styles/date.scss");
require("./styles/form.scss");
require("./styles/main.scss");
require("./styles/popup.scss");
const { loadTheme } = require("./actions");
const { IDs } = require("./config");

const node = document.createElement("div");
node.setAttribute("id", IDs.APP_ID);
document.body.append(node);

loadTheme();

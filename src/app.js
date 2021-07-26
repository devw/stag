require("./styles/animations.scss");
require("./styles/date.scss");
require("./styles/form.scss");
require("./styles/main.scss");
require("./styles/popup.scss");
require("./styles/register.scss");
const { loadTheme } = require("./actions");
const { IDs } = require("./config");
console.log("----s")

setTimeout(() => {
    const node = document.createElement("div");
    node.setAttribute("id", IDs.APP_ID);
    document.body.prepend(node);
    loadTheme();
}, 0);


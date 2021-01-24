require("./styles/main.scss");
require("./styles/loader.scss");
require("./styles/carousel.scss");
require("./styles/popup.scss");
require("./styles/form.scss");
require("./styles/animations.scss");

const { IDs, CSS } = require("./config");

const node = globalThis.document.createElement("div");
node.setAttribute("id", IDs.APP_ID);
globalThis.document.body.append(node);

const { loadTheme } = require("./actions");
loadTheme();

const addCSS = (fName) => {
    const head = document.getElementsByTagName("head")[0];
    const link = `<link rel="stylesheet" href="${fName}" />`;
    head.insertAdjacentHTML("afterbegin", link);
};
addCSS(CSS);

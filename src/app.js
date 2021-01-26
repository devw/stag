require("./styles/main.scss");
require("./styles/loader.scss");
require("./styles/carousel.scss");
require("./styles/popup.scss");
require("./styles/form.scss");
require("./styles/animations.scss");
const { loadTheme } = require("./actions");
const { IDs, CONFIG } = require("./config");

const node = globalThis.document.createElement("div");
node.setAttribute("id", IDs.APP_ID);
globalThis.document.body.append(node);

const addCSS = (fName) => {
    const head = document.getElementsByTagName("head")[0];
    const url = /localhost/.test(location.href) ? fName : `${CONFIG}${fName}`;
    const link = `<link rel="stylesheet" href="${url}" />`;
    head.insertAdjacentHTML("afterbegin", link);
};

loadTheme().then(() => {
    if (globalThis.self !== globalThis.top || /localhost/.test(location.href)) {
        //TODO when I edit theme from Shopify it opens the popup!
        const { openAccount } = require("./actions/load");
        const { kastorHandler } = require("./services");
        openAccount();
        kastorHandler();
    }
});

addCSS("/main.css");

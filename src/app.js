require("./styles/main.scss");
require("./styles/loader.scss");
require("./styles/carousel.scss");
require("./styles/popup.scss");
require("./styles/form.scss");
require("./styles/animations.scss");
const { loadTheme } = require("./actions");
const { IDs, ENDPOINT } = require("./config");

const node = globalThis.document.createElement("div");
node.setAttribute("id", IDs.APP_ID);
globalThis.document.body.append(node);

const addCSS = (fName) => {
    const head = document.getElementsByTagName("head")[0];
    const url = /localhost|ngrok/.test(location.href)
        ? fName
        : `${ENDPOINT}${fName}`;
    const link = `<link rel="stylesheet" href="${url}" />`;
    head.insertAdjacentHTML("afterbegin", link);
};

loadTheme().then(() => {
    if (
        globalThis.self !== globalThis.top ||
        /localhost|ngrok/.test(location.href)
    ) {
        //TODO when I edit theme from Shopify it opens the popup!
        const { openAccount } = require("./actions/load");
        const { kastorHandler } = require("./services");
        openAccount();
        kastorHandler();
    }
});

addCSS("/main.css?v=1");

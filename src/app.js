require("./styles/main.scss");
require("./styles/loader.scss");
require("./styles/carousel.scss");
require("./styles/popup.scss");
require("./styles/form.scss");
require("./styles/animations.scss");
const { loadTheme } = require("./actions");

const { IDs, CSS } = require("./config");

const node = globalThis.document.createElement("div");
node.setAttribute("id", IDs.APP_ID);
globalThis.document.body.append(node);

const addCSS = (CSS) => {
    const head = document.getElementsByTagName("head")[0];
    const fName = /localhost/.test(location.href) ? "./main.css" : CSS;
    const link = `<link rel="stylesheet" href="${fName}" />`;
    head.insertAdjacentHTML("afterbegin", link);
};

loadTheme().then(() => {
    if (globalThis.self !== globalThis.top || /localhost/.test(location.href)) {
        //TODO when I edit theme from sjopify it opens the popup!
        const { openAccount } = require("./actions/load");
        const { kastorHandler } = require("./services");
        openAccount();
        kastorHandler();
    }
});

addCSS(CSS);

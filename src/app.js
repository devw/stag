require("./styles/main.scss");
require("./styles/popup.scss");
require("./styles/form.scss");
require("./styles/animations.scss");
const { loadTheme } = require("./actions");
const { IDs, ENDPOINT } = require("./config");

const node = document.createElement("div");
node.setAttribute("id", IDs.APP_ID);
document.body.append(node);

const addJS = (url) => {
    const HEAD = document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.src = url;
    HEAD.appendChild(script);
};

loadTheme().then(() => {
    require("./actions/load");
    if (globalThis.self !== globalThis.top || !globalThis?.Shopify) {
        //TODO when I edit theme from Shopify it opens the popup!
        // require("./services/kastor-handler");
        // openAccount();
        console.log("kastor_logic");
        const url = globalThis?.Shopify ? ENDPOINT : location.origin;
        addJS(`${url}/kastorHandler.js?t=${Math.random()}`);
    }
});

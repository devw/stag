require("./styles/main.scss");
require("./styles/popup.scss");
require("./styles/form.scss");
require("./styles/animations.scss");
const { loadTheme } = require("./actions");
const { IDs } = require("./config");

const node = globalThis.document.createElement("div");
node.setAttribute("id", IDs.APP_ID);
globalThis.document.body.append(node);

loadTheme().then(() => {
    const { openAccount } = require("./actions/load");
    if (globalThis.self !== globalThis.top || !globalThis?.Shopify) {
        //TODO when I edit theme from Shopify it opens the popup!
        require("./services/kastor-handler");
        openAccount();
    }
});

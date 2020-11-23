const { updatePages } = require("../utils");
const { updateCss } = require("../utils");
const { loadActions } = require("./load");
const config = require("../../public/data/config.json");

setTimeout(() => {
    updatePages(config.text);
    updateCss(config.style);
    loadActions(config);
}, 0); // TODO to fix

// globalThis.addEventListener("load", () => {
//     updatePages(text);
//     updateCss(css);
//     loadActions();
// });

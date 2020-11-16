const { updatePages } = require("../utils");
const { updateCss } = require("../utils");
const { loadActions } = require("./load");
const css = require("../../public/data/style.json");
const text = require("../../public/data/text.json");

setTimeout(() => {
    updatePages(text);
    updateCss(css);
    loadActions();
}, 0); // TODO to fix

// globalThis.addEventListener("load", () => {
//     updatePages(text);
//     updateCss(css);
//     loadActions();
// });

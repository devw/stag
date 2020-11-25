const { updatePages } = require("../utils");
const { updateCss } = require("../utils");
const { loadActions } = require("./load");
const { getConfig } = require("../services");

// globalThis.addEventListener("load", () => { // TODO to fix
setTimeout(async () => {
    const config = await getConfig();
    updatePages(config.text);
    updateCss(config.style);
    loadActions(config);
}, 0);

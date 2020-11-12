const { updatePages } = require("../utils");
const { updateCss } = require("../utils");
const { APP_ID, LANDING_ID } = require("../templates/");
const { loadActions } = require("./load");
const css = require("../../public/data/custom.json");
const text = require("../../public/data/text.json");
const $ = document.querySelector.bind(document);

globalThis.addEventListener("load", () => {
    updatePages(text);
    updateCss(css);
    loadActions();
});

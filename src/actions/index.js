const { updatePages } = require("../utils");
const { updateCss } = require("../utils");
const { APP_ID } = require("../configs/pages-id.yml");
const { loadActions } = require("./load");
const css = require("../../public/data/custom.json");
const text = require("../../public/data/text.json");
const $ = document.querySelector.bind(document);

globalThis.addEventListener("load", () => {
    updatePages(text);
    updateCss(css);
    loadActions();
    $(`#${APP_ID} .page-landing`).style.setProperty("display", "block");
});

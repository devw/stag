const { updatePages } = require("../utils");
const { APP_ID } = require("../configs/pages-id.yml");
const { loadActions } = require("./load");
const $ = document.querySelector.bind(document);

globalThis.addEventListener("load", () => {
    updatePages();
    loadActions();
    $(`#${APP_ID} .page-landing`).style.setProperty("display", "block");
});

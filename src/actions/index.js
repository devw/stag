const { loadTemplates, loadActions } = require("../utils");
const { APP_ID } = require("../configs/pages-id.yml");
const $ = document.querySelector.bind(document);

globalThis.addEventListener("load", () => {
    loadTemplates();
    loadActions();
    $(`#${APP_ID} .page-landing`).style.setProperty("display", "block");
});

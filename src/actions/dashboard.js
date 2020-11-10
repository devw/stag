const $ = document.querySelector.bind(document);
const { APP_ID } = require("../configs/pages-id.yml");
const router = require("../utils");

const init = () =>
    $(`#${APP_ID} .js-load-json-theme`).addEventListener("click", loadJsonVars);

const loadJsonVars = async (e) => {
    const theme = e.target.value;
    const text = await fetch(`data/${theme}-text.json`);
    const style = await fetch(`data/${theme}-custom.json`);
    const textJson = await text.json();
    const styleJson = await style.json();
    router.loadTemplates(textJson, styleJson);
    router.loadActions();
    $(`#${APP_ID} .page-landing`).style.setProperty("display", "block");
};

module.exports = {
    init: init,
};

const $ = document.querySelector.bind(document);
const { APP_ID, LANDING_ID } = require("../templates/");
const utils = require("../utils");
const load = require("./load");

const init = () => {
    $(`#${APP_ID} .js-load-json-theme`).addEventListener("click", uploadTheme);
    $(`#${APP_ID} .js-load-json`).addEventListener("click", loadFromTextarea);
};

const loadFromTextarea = (e) => {
    const css = e.target.previousElementSibling.value;
    utils.updateCss(JSON.parse(css));
};

const uploadTheme = async (e) => {
    const theme = e.target.value;
    const text = await fetch(`data/${theme}-text.json`);
    const style = await fetch(`data/${theme}-custom.json`);
    const styleJson = await style.json();
    utils.updatePages(await text.json());
    utils.updateCss(styleJson);
    load.loadActions();
    $(`#${APP_ID} .${LANDING_ID}`).style.setProperty("display", "block");
    $(`#${APP_ID} .js-json-code`).value = JSON.stringify(styleJson);
};

module.exports = {
    init: init,
};

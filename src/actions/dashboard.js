const $ = document.querySelector.bind(document);
const { APP_ID, LANDING_ID } = require("../templates/");
const utils = require("../utils");
const load = require("./load");

const loadStyle = () => {
    console.log("....loadStyle");
    const css = $(`#${APP_ID} .js-custom-style`).value;
    utils.updateCss(JSON.parse(css));
};

const loadTheme = async (e) => {
    console.log("....loadTheme");
    const theme = e.target.value;
    const text = await fetch(`data/${theme}-text.json`);
    const style = await fetch(`data/${theme}-custom.json`);
    const styleJson = await style.json();
    utils.updatePages(await text.json());
    utils.updateCss(styleJson);
    load.loadActions();
    $(`#${APP_ID} .${LANDING_ID}`).style.setProperty("display", "block");
};

const init = () => {
    $(`#${APP_ID} .js-load-theme`).addEventListener("click", loadTheme);
    $(`#${APP_ID} .js-load-style`).addEventListener("click", loadStyle);
};

module.exports = {
    init: init,
};

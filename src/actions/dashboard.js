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
    const theme = e.target.value;
    const text = await fetch(`data/${theme}-text.json`);
    const style = await fetch(`data/${theme}-style.json`);
    const styleJson = await style.json();
    utils.updatePages(await text.json());
    utils.updateCss(styleJson);
    load.loadActions();
    $(`#${APP_ID} .container`).style.setProperty("display", "flex"); // TODO refactor and show also the dashboard
};

const init = () => {
    $(`#${APP_ID} .js-load-theme`).addEventListener("click", loadTheme);
    $(`#${APP_ID} .js-load-style`).addEventListener("click", loadStyle);
};

module.exports = {
    init: init,
};

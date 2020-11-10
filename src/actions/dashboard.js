const $ = document.querySelector.bind(document);
const { REGISTER_ID, LANDING_ID, APP_ID } = require("../configs/pages-id.yml");

const loadJsonVars = async (e) => {
    const theme = e.target.value;
    const text = await fetch(`data/${theme}-text.json`);
    const style = await fetch(`data/${theme}-custom.json`);
    const textJson = await text.json();
    const styleJson = await style.json();
    console.log(textJson);
    console.log(styleJson);
    // landing(textJson, styleJson);
};

const dashboard = () => {
    // $(`#${APP_ID} .js-load-json`).addEventListener("click", (e) => {
    //     const jsonValue = e.target.previousElementSibling.value;
    //     loadCssVars(JSON.parse(jsonValue));
    // });
    $(`#${APP_ID} .js-load-json-theme`).addEventListener("click", loadJsonVars);
    // $(`#${APP_ID} .js-json-code`).innerHTML = JSON.stringify(css);
};

dashboard();

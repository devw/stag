const { router } = require("../router");
const { REGISTER_ID, LANDING_ID, APP_ID } = require("../configs/pages-id.yml");
const $ = document.querySelector.bind(document);
const cssVars = require("../styles/custom.json");
const data = require("../styles/text.json");

const toggleButton = ({ target }) => {
    const btn = $("button");
    const isEmail = /\S+@\S+\.\S+/.test(target.value);
    isEmail ? activeBtn(btn, target) : disableBtn(btn);
};

const loadCssVars = (cssVars) => {
    let currentSelector = document.querySelector(`#${APP_ID}`);
    (function traverse(obj, key) {
        if (obj !== null && typeof obj == "object") {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else currentSelector.style.setProperty(key, obj);
    })(cssVars);
};

const closeApp = () => ($(`#${APP_ID}`).innerHTML = "");

const initContainer = () => {
    $(`#${APP_ID} .js-close`).addEventListener("click", closeApp);
    $(`#${APP_ID} .js-load-json`).addEventListener("click", (e) => {
        const jsonValue = e.target.previousElementSibling.value;
        loadCssVars(JSON.parse(jsonValue));
    });
    $(`#${APP_ID} .js-load-json-theme`).addEventListener("click", loadJsonVars);
};

const loadJsonVars = async (e) => {
    const theme = e.target.value;
    const resp = await fetch(`data/${theme}-custom.json`);
    loadCssVars(await resp.json());
    const text = await fetch(`data/${theme}-text.json`);
    register(await text.json());
    initContainer();
};

const disableBtn = (btn) => btn.setAttribute("disabled", "true");

const activeBtn = (btn, target) => {
    btn.removeAttribute("disabled");
    sessionStorage.setItem("email", target.value);
};

const register = (text = data) => {
    $(`#${APP_ID}`).innerHTML = router.get(REGISTER_ID, data);
    initContainer();
    $(`#${APP_ID}`).addEventListener("input", toggleButton);
};

const landing = () => {
    initContainer();
    $(`#${APP_ID} .input-text`).addEventListener("input", toggleButton);
    $(`#${APP_ID} [name='validate']`).addEventListener("click", register);
    loadCssVars(cssVars);
};

window.addEventListener("load", landing);

const { router } = require("../router");
const { REGISTER_ID, APP_ID } = require("../configs/pages-id.yml");
const $ = document.querySelector.bind(document);
const cssVars = require("../styles/custom.json");

const toggleButton = ({ target }) => {
    const btn = $("button");
    const isEmail = /\S+@\S+\.\S+/.test(target.value);
    isEmail ? activeBtn(btn, target) : disableBtn(btn);
};

const loadCssVars = () => {
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
};

const disableBtn = (btn) => btn.setAttribute("disabled", "true");

const activeBtn = (btn, target) => {
    btn.removeAttribute("disabled");
    sessionStorage.setItem("email", target.value);
};

const register = () => {
    $(`#${APP_ID}`).innerHTML = router.get(REGISTER_ID);
    initContainer();
    $(`#${APP_ID}`).addEventListener("input", toggleButton);
};

const landing = () => {
    initContainer();
    $(`#${APP_ID} .input-text`).addEventListener("input", toggleButton);
    $(`#${APP_ID} [name='validate']`).addEventListener("click", register);
    loadCssVars();
};

window.addEventListener("load", landing);

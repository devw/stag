const { router } = require("../router");
const {
    REGISTER_ID,
    SIGN_IN,
    APP_ID,
    LANDING_ID,
} = require("../configs/pages-id.yml");
const $ = document.querySelector.bind(document);

const toggleButton = ({ target }) => {
    const btn = $("button");
    const isEmail = /\S+@\S+\.\S+/.test(target.value);
    isEmail ? activeBtn(btn, target) : disableBtn(btn);
};

const initContainer = () =>
    $(`#${APP_ID} .popup-close`).addEventListener("click", closeApp);

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
const closeApp = () => ($(`#${APP_ID}`).innerHTML = "");

const landing = () => {
    initContainer();
    $(`#${APP_ID} .input-text`).addEventListener("input", toggleButton);
    $(`#${APP_ID} [name='validate']`).addEventListener("click", register);
};

window.addEventListener("load", landing);

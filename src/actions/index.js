const { router } = require("../router");
const { REGISTER_ID, SIGN_IN, APP_ID } = require("../configs/pages-id.yml");
const $ = document.querySelector.bind(document);

const toggleButton = ({ target }) => {
    const btn = $("button");
    const isEmail = /\S+@\S+\.\S+/.test(target.value);
    isEmail ? activeBtn(btn, target) : disableBtn(btn);
};

const disableBtn = (btn) => btn.setAttribute("disabled", "true");

const activeBtn = (btn, target) => {
    btn.removeAttribute("disabled");
    sessionStorage.setItem("email", target.value);
};

const register = () => {
    $(`#${APP_ID}`).innerHTML = router.get(REGISTER_ID);
    $(`#${APP_ID}`).addEventListener("input", toggleButton);
};
const closeApp = () => ($(`#${APP_ID}`).innerHTML = "");

const popupActions = () => {
    console.log($(`#${APP_ID}`));
    $(`#${APP_ID}`)
        .querySelector(".popup-close")
        .addEventListener("click", closeApp);
    $(`#${APP_ID}`)
        .querySelector(".input-text")
        .addEventListener("input", toggleButton);
    $(`#${APP_ID}`)
        .querySelector("[name=validate]")
        .addEventListener("click", register);
};

module.exports = popupActions;

window.addEventListener("load", popupActions);

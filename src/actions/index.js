const $ = document.querySelector.bind(document);
const { router } = require("../router");
const { REGISTER_ID, SIGN_IN, APP_ID } = require("../configs/pages-id.yml");

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

const register = () => ($(`#${APP_ID}`).innerHTML = router.get(REGISTER_ID));

const closeApp = () => ($(`#${APP_ID}`).innerHTML = "");

const popupActions = () => {
    $(".popup-close")?.addEventListener("click", closeApp);
    $(".input-text")?.addEventListener("input", toggleButton);
    $("[name=validate]")?.addEventListener("click", register);
    $(`${REGISTER_ID} form`)?.addEventListener("input", toggleButton);
};

module.exports = popupActions;

window.addEventListener("load", popupActions);

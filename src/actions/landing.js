const { APP_ID } = require("../configs/pages-id.yml");
const $ = document.querySelector.bind(document);

const disableBtn = (btn) => btn.setAttribute("disabled", "true");

const activeBtn = (btn, target) => {
    btn.removeAttribute("disabled");
    sessionStorage.setItem("email", target.value);
};
const toggleButton = ({ target }) => {
    const btn = $("button");
    const isEmail = /\S+@\S+\.\S+/.test(target.value);
    isEmail ? activeBtn(btn, target) : disableBtn(btn);
};

const register = () => {
    $(`#${APP_ID} .page`).style.setProperty("display", "none");
    $(`#${APP_ID} .page-register`).style.setProperty("display", "block");
};

const init = () => {
    $(`#${APP_ID} .input-text`).addEventListener("input", toggleButton);
    $(`#${APP_ID} [name='validate']`).addEventListener("click", register);
};

module.exports = {
    init: init,
};

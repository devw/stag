const { APP_ID } = require("../configs/pages-id.yml");
const { isRegistered } = require("../services");
const $ = document.querySelector.bind(document);

const disableBtn = (btn) => btn.setAttribute("disabled", "true");

const activeBtn = (btn, target) => {
    btn.removeAttribute("disabled");
    sessionStorage.setItem("email", target.value); //TODO fix it
};
const toggleButton = ({ target }) => {
    const btn = $("button"); //TODO fix it
    const isEmail = /\S+@\S+\.\S+/.test(target.value);
    isEmail ? activeBtn(btn, target) : disableBtn(btn);
};

const onSubmit = async () => {
    const email = $(`#${APP_ID} [type='email']`).value;
    (await isRegistered(email)) ? signIn() : register();
};

const register = () => {
    $(`#${APP_ID} .page`).style.setProperty("display", "none");
    $(`#${APP_ID} .page-register`).style.setProperty("display", "block");
};

const signIn = () => {
    $(`#${APP_ID} .page`).style.setProperty("display", "none");
    $(`#${APP_ID} .page-sign-in`).style.setProperty("display", "block");
};

exports.init = () => {
    $(`#${APP_ID} .input-text`).addEventListener("input", toggleButton);
    console.log($(`#${APP_ID} [name='validate']`));
    $(`#${APP_ID} [name='validate']`).addEventListener("click", onSubmit);
};

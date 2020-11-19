const { APP_ID, LANDING_ID, REGISTER_ID, SIGNIN_ID } = require("../templates/");
const { isRegistered } = require("../services");
const $ = document.querySelector.bind(document);
const { toggleModules } = require("../utils");
const disableBtn = (btn) => btn.setAttribute("disabled", "true");
let form;

const activeBtn = (btn, target) => {
    btn.removeAttribute("disabled");
    sessionStorage.setItem("email", target.value); //TODO fix it
};
const toggleButton = ({ target }) => {
    const btn = form.querySelector("input[type='submit']");
    const isEmail = /\S+@\S+\.\S+/.test(target.value);
    isEmail ? activeBtn(btn, target) : disableBtn(btn);
};

const onSubmit = async () => {
    const email = form.querySelector("[type='email']").value;
    $(`#${APP_ID} .${REGISTER_ID} form [type='email']`).value = email;
    $(`#${APP_ID} .${SIGNIN_ID} form [type='email']`).value = email;
    const result = await isRegistered(email);
    result ? signIn() : register();
};

const register = () => {
    toggleModules([LANDING_ID, REGISTER_ID]);
};

const signIn = () => {
    toggleModules([LANDING_ID, SIGNIN_ID]);
};

exports.init = () => {
    $(`#${APP_ID} .js-modal`)
        ? toggleModules([LANDING_ID])
        : toggleModules([SIGNIN_ID]); // TODO improve it
    form = $(`#${APP_ID} .${LANDING_ID} form`);
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
};

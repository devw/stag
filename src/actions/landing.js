const { LANDING_ID, REGISTER_ID, SIGNIN_ID } = require("../templates/");
const { isRegistered } = require("../services");
const { toggleModules, $q, $qq } = require("../utils");
const disableBtn = (btn) => btn.setAttribute("disabled", "true");
let form;
globalThis.__toggleModules = toggleModules;

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
    $qq(`.${REGISTER_ID}`, "form [type='email']").value = email;
    $qq(`.${SIGNIN_ID}`, "form [type='email']").value = email;
    const result = await isRegistered(email);
    result ? signIn() : register();
};

const register = () => {
    toggleModules(REGISTER_ID);
};

const signIn = () => {
    toggleModules(SIGNIN_ID);
};

exports.init = () => {
    $q(".js-modal") ? toggleModules(LANDING_ID) : toggleModules(SIGNIN_ID);
    form = $qq(`.${LANDING_ID}`, "form");
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
};

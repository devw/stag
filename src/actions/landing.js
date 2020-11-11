const {
    APP_ID,
    LANDING_ID,
    REGISTER_ID,
    SIGNIN_ID,
} = require("../configs/pages-id.yml");
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
    const btn = $("button"); //TODO fix it
    const isEmail = /\S+@\S+\.\S+/.test(target.value);
    isEmail ? activeBtn(btn, target) : disableBtn(btn);
};

const onSubmit = async () => {
    const email = $(`#${APP_ID} [type='email']`).value;
    (await isRegistered(email)) ? signIn() : register();
};

const register = () => {
    toggleModules([LANDING_ID, REGISTER_ID]);
};

const signIn = () => {
    toggleModules([LANDING_ID, SIGNIN_ID]);
};

exports.init = () => {
    toggleModules([LANDING_ID]);
    form = $(`#${APP_ID} .${LANDING_ID} form`);
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
};

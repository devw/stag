const {
    APP_ID,
    LANDING_ID,
    REGISTER_ID,
    SIGNIN_ID,
} = require("../configs/pages-id.yml");
const { isRegistered } = require("../services");
const $ = document.querySelector.bind(document);

const disableBtn = (btn) => btn.setAttribute("disabled", "true");

let node;

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
    node.style.setProperty("display", "none");
    $(`#${APP_ID} .${REGISTER_ID}`).style.setProperty("display", "block");
};

const signIn = () => {
    node.style.setProperty("display", "none");
    $(`#${APP_ID} .${SIGNIN_ID}`).style.setProperty("display", "block");
};

exports.init = () => {
    node = $(`#${APP_ID} .${LANDING_ID}`);
    node.style.setProperty("display", "block");
    node.addEventListener("input", toggleButton);
    $(`#${APP_ID} [name='validate']`).addEventListener("click", onSubmit);
};

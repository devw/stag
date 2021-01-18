const { LANDING_ID, REGISTER_ID, SIGNIN_ID } = require("../templates/");
const { isRegistered } = require("../services");
const { toggleModules, $qq } = require("../utils");
const disableBtn = (btn) => btn.setAttribute("disabled", "true");
let form;

const activeBtn = (btn, target) => {
    btn.removeAttribute("disabled");
    sessionStorage.setItem("email", target.value); //TODO fix it
};
const toggleButton = ({ target }) => {
    const btn = form.querySelector("input[type='submit']");
    const isEmail = /[\w.]+@\w+\.[a-z]{2,}/.test(target.value);
    isEmail ? activeBtn(btn, target) : disableBtn(btn);
};

const onSubmit = async () => {
    const email = form.querySelector("[type='email']").value;
    $qq(`.${REGISTER_ID}`, "form [type='email']").value = email;
    $qq(`.${SIGNIN_ID}`, "form [type='email']").value = email;
    const result = await isRegistered(email);
    if (!result?.state) register();
    else if (result?.state === "enabled") signIn();
    else if (result?.disabled === "enabled") {
        /*todo load disable page*/
    }
};

const register = () => {
    toggleModules(REGISTER_ID);
};

const signIn = () => {
    toggleModules(SIGNIN_ID);
};

exports.init = () => {
    form = $qq(`.${LANDING_ID}`, "form");
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
};

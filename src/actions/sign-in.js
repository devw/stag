const { APP_ID, SIGNIN_ID } = require("../templates/");
const { isLogged } = require("../services");
const $ = document.querySelector.bind(document);
let form;

const getEmail = () => form.querySelector("[name='email']").value;
const getPsw = () => form.querySelector("[name='password']").value;

const onSubmit = async (e) => {
    const email = getEmail();
    const psw = getPsw();
    alert(await isLogged(email, psw));
};

const toggleButton = (e) => {
    const isEmail = /\S+@\S+\.\S+/.test(getEmail());
    if (isEmail)
        form.querySelector("input[type='submit']").removeAttribute("disabled");
};

exports.init = () => {
    form = $(`#${APP_ID} .${SIGNIN_ID}`);
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
};

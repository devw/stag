const { APP_ID, SIGNIN_ID, REGISTER_ID } = require("../templates/");
const { isLogged } = require("../services");
const { serialize, toggleModules } = require("../utils");

const $ = document.querySelector.bind(document);
let form;

const onSubmit = async (_) => {
    const inputs = serialize(form);
    alert(await isLogged(inputs));
};

const toggleButton = (e) => {
    const email = form.querySelector("[name='email']").value;
    const isEmail = /\S+@\S+\.\S+/.test(email);
    if (isEmail)
        form.querySelector("input[type='submit']").removeAttribute("disabled");
};

const register = () => toggleModules([REGISTER_ID, SIGNIN_ID]);

exports.init = () => {
    form = $(`#${APP_ID} .${SIGNIN_ID} form`);
    console.log(form);
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
    $(`#${APP_ID} .js-create-account`)?.addEventListener("click", register);
};

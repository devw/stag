const { APP_ID, SIGNIN_ID } = require("../templates/");
const { isLogged } = require("../services");
const { serialize } = require("../utils");
const $ = document.querySelector.bind(document);
let form;

const onSubmit = async (e) => {
    const inputs = serialize(form);
    alert(await isLogged(inputs));
};

const toggleButton = (e) => {
    const email = form.querySelector("[name='email']").value;
    const isEmail = /\S+@\S+\.\S+/.test(email);
    if (isEmail)
        form.querySelector("input[type='submit']").removeAttribute("disabled");
};

exports.init = () => {
    form = $(`#${APP_ID} .${SIGNIN_ID} form`);
    console.log(form);
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
};

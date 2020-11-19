const { APP_ID, REGISTER_ID, SIGNIN_ID } = require("../templates");
const { sendHttpRequest } = require("../services");
const $ = document.querySelector.bind(document);
const {
    toggleModules,
    serialize,
    isFormFilled,
    isValidPsw,
} = require("../utils");
let form, errorNode;

const toggleButton = ({ target }) => {
    if (target.value.length > 2)
        target.nextElementSibling.removeAttribute("disabled");

    const btn = form.querySelector("input[type='submit']");
    isFormFilled(form)
        ? btn.removeAttribute("disabled")
        : btn.setAttribute("disabled", "true");
};

const arePasswordsDiff = (inputs) =>
    inputs.confirmPassword &&
    inputs.confirmPassword !== inputs["customer[password]"];

// TODO refactor this part
const checkInputs = (inputs) => {
    const pswDiff = errorNode.querySelector(".js-psw-diff");
    const pswValid = errorNode.querySelector(".js-psw-valid");
    if (arePasswordsDiff(inputs)) {
        pswDiff.style.setProperty("display", "block");
        return null;
    } else {
        pswDiff.style.setProperty("display", "none");
    }
    if (!isValidPsw(inputs["customer[password]"])) {
        pswValid.style.setProperty("display", "block");
        return null;
    } else {
        pswValid.style.setProperty("display", "none");
    }
};

const onSubmit = async (e) => {
    e.preventDefault();
    const inputs = serialize(form);
    checkInputs(inputs);
    form.action = "https://antonio-balzac.myshopify.com/account/register";
    const resp = await sendHttpRequest("POST", e.target.action);
    console.log(resp);
    $(".js-shopify-response").innerHTML = resp;

    // globalThis.__form = form;
    // globalThis.__inputs = inputs;
    // form.submit();
};

const goNextSlide = () => {
    const node = form.querySelector(".carousel");
    const shift = getComputedStyle(node).getPropertyValue("width");
    node.scrollBy({
        left: parseInt(shift, 10),
        behavior: "smooth",
    });
};

const goPrevSlide = () => {
    const node = form.querySelector(".carousel");
    const shift = getComputedStyle(node).getPropertyValue("width");
    node.scrollBy({
        left: -parseInt(shift, 10),
        behavior: "smooth",
    });
};

exports.init = () => {
    errorNode = $(`#${APP_ID} .${REGISTER_ID} .js-error`);
    form = $(`#${APP_ID} .${REGISTER_ID} form`);
    form.addEventListener("input", toggleButton);
    form.querySelectorAll(".js-next").forEach((e) =>
        e.addEventListener("click", goNextSlide)
    );
    form.querySelectorAll(".js-prev").forEach((e) =>
        e.addEventListener("click", goPrevSlide)
    );
    form.addEventListener("submit", onSubmit);

    $(`#${APP_ID} .${REGISTER_ID} .js-login`)?.addEventListener("click", () =>
        toggleModules([REGISTER_ID, SIGNIN_ID])
    );
};

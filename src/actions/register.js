const { REGISTER_ID, SIGNIN_ID } = require("../templates");
const { sendHttpRequest } = require("../services");
const {
    toggleModules,
    serialize,
    isFormFilled,
    isValidPsw,
    $q,
} = require("../utils");
const tgt = {
    form: `.${REGISTER_ID} form`,
    login: `.${REGISTER_ID} .js-login`,
    pswDiffError: `.${REGISTER_ID} .js-error .js-psw-diff`,
    pswFormatError: `.${REGISTER_ID} .js-error .js-psw-valid`,
};

const toggleButton = ({ target }) => {
    if (target.value.length > 2)
        target.nextElementSibling.removeAttribute("disabled");

    const btn = $q(tgt.form).querySelector("input[type='submit']");
    isFormFilled($q(tgt.form))
        ? btn.removeAttribute("disabled")
        : btn.setAttribute("disabled", "true");
};

const onSubmit = async (e) => {
    e.preventDefault();
    //TODO you do not need serialize!
    const inputs = serialize($q(tgt.form));
    if (!isValidPsw(inputs)) return null;
    $q(tgt.form).action = "/account";
    const resp = await sendHttpRequest("POST", e);
    console.log("shopify response", resp);
    globalThis.__form = $q(tgt.form);
};

const goNextSlide = () => {
    const node = $q(tgt.form).querySelector(".carousel");
    const shift = getComputedStyle(node).getPropertyValue("width");
    node.scrollBy({
        left: parseInt(shift, 10),
        behavior: "smooth",
    });
};

const goPrevSlide = () => {
    const node = $q(tgt.form).querySelector(".carousel");
    const shift = getComputedStyle(node).getPropertyValue("width");
    node.scrollBy({
        left: -parseInt(shift, 10),
        behavior: "smooth",
    });
};

exports.init = () => {
    const form = $q(tgt.form);

    form.addEventListener("input", toggleButton);
    form.querySelectorAll(".js-next").forEach((e) =>
        e.addEventListener("click", goNextSlide)
    );
    form.querySelectorAll(".js-prev").forEach((e) =>
        e.addEventListener("click", goPrevSlide)
    );
    form.addEventListener("submit", onSubmit);
    $q(tgt.login)?.addEventListener("click", () =>
        toggleModules([REGISTER_ID, SIGNIN_ID])
    );
};

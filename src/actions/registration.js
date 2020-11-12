const { APP_ID, REGISTER_ID, SIGNIN_ID } = require("../templates/");
const { isRegistered } = require("../services");
const $ = document.querySelector.bind(document);
const { toggleModules, serialize, isFormFilled } = require("../utils");
let form;

const toggleButton = ({ target }) => {
    if (target.value.length > 2)
        target.nextElementSibling.removeAttribute("disabled");

    const btn = form.querySelector("input[type='submit']");
    isFormFilled(form)
        ? btn.removeAttribute("disabled")
        : btn.setAttribute("disabled", "true");
};

const onSubmit = async () => {
    console.log(serialize(form));
    isRegistered("@gm"); // TODO to fix
    toggleModules([REGISTER_ID, SIGNIN_ID]);
};

const goNextSlide = () => {
    $(".carousel").scrollBy({
        left: +450, // TODO to fix
        behavior: "smooth",
    });
};

const goPrevSlide = () => {
    $(".carousel").scrollBy({
        left: -450, // TODO to fix
        behavior: "smooth",
    });
};

exports.init = () => {
    form = $(`#${APP_ID} .${REGISTER_ID} form`);
    form.addEventListener("input", toggleButton);
    form.querySelectorAll(".js-next").forEach((e) =>
        e.addEventListener("click", goNextSlide)
    );
    form.querySelectorAll(".js-prev").forEach((e) =>
        e.addEventListener("click", goPrevSlide)
    );
    form.addEventListener("submit", onSubmit);
};

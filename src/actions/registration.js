const { APP_ID, REGISTER_ID } = require("../configs/pages-id.yml");
const { isRegistered } = require("../services");
const $ = document.querySelector.bind(document);
const { toggleModules, serialize, isFormFilled } = require("../utils");
const disableBtn = (btn) => btn.setAttribute("disabled", "true");
let form;

const activeBtn = (btn, target) => {
    btn.removeAttribute("disabled");
    sessionStorage.setItem("email", target.value); //TODO fix it
};
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

    // form.addEventListener("submit", onSubmit);
};

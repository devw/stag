const $ = document.querySelector.bind(document);
const { router } = require("../router");
const { REGISTER_ID } = require("../configs/pages-id.config");

const toggleButtons = ({ target }) => {
    const btn = $("button");
    const isEmail = /\S+@\S+\.\S+/.test(target.value);
    isEmail ? activeBtn(btn, target) : disableBtn(btn);
};

const disableBtn = (btn) => btn.setAttribute("disabled", "true");

const activeBtn = (btn, target) => {
    btn.removeAttribute("disabled");
    sessionStorage.setItem("email", target.value);
};

const register = (e) => {
    document.getElementsByTagName("body")[0].innerHTML = router.get(
        REGISTER_ID
    );
};

const popupActions = () => {
    // close listener
    $(".account-popup__close-popup")?.addEventListener("click", (e) => {
        $("[name='account-popup'").style.display = "none";
    });
    $(".input-text")?.addEventListener("input", toggleButtons);
    $("[name=validate]")?.addEventListener("click", register);
};

module.exports = {
    popupActions,
};

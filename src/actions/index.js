const $ = document.querySelector.bind(document);

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

const switchPages = () => {};

const popupActions = () => {
    // close listener
    $(".account-popup__close-popup")?.addEventListener("click", (e) => {
        $("[name='account-popup'").style.display = "none";
    });
    $(".input-text")?.addEventListener("input", toggleButtons);
    // $("[name=validate]").addEventListener("click", register);
};

module.exports = {
    popupActions,
};

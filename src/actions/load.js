const { init: initLanding } = require("./landing");
const { init: initSignIn } = require("./sign-in");
const { init: initRegistration } = require("./register");
const { $q, toggleModules } = require("../utils/");
const { LOGIN_BTN } = require("../config");
const { LANDING_ID } = require("../templates/");

//TODO refactoring too code repetition

const closeApp = () => {
    // TODO remove container
    $q(`.container`).style.setProperty("display", "none");
    document.body.classList.remove("remove-scrolling");
};

const initContainer = () => {
    $q(`.js-close`).addEventListener("click", closeApp);
};

const placePopover = (e, dom) => {
    const shift = parseInt(getComputedStyle(dom).getPropertyValue("width"));
    dom.style.setProperty("left", `${e.clientX - shift / 2}px`);
    dom.style.setProperty("top", `${e.clientY + 20}px`);
};

const openAccount = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (!globalThis.__st?.cid) {
        toggleModules(LANDING_ID);
        const dom = $q(".container");
        dom.style.setProperty("display", "flex");
        if (dom.classList.contains("popover")) placePopover(e, dom);
    } else window.location.href = "./account";
};

exports.openAccount = openAccount;
const $ = document.querySelector.bind(document);
$(LOGIN_BTN)?.addEventListener("click", openAccount, true);

exports.loadActions = () => {
    initContainer();
    initLanding();
    initSignIn();
    initRegistration();
};

const { init: initLanding } = require("./landing");
const { init: initSignIn } = require("./sign-in");
const { init: initRegistration } = require("./register");
const { $q } = require("../utils/");

//TODO refactoring too code repetition

const closeApp = () => {
    $q(`.container`).style.setProperty("display", "none");
    document.body.classList.remove("remove-scrolling");
};

const initContainer = () => {
    $q(`.js-close`).addEventListener("click", closeApp);
};

exports.loadActions = () => {
    initLanding();
    initContainer();
    initSignIn();
    initRegistration();
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
        const dom = $q(".container");
        dom.style.setProperty("display", "flex");
        if (dom.classList.contains("popover")) placePopover(e, dom);
    }
};

exports.openAccount = openAccount;
const $ = document.querySelector.bind(document);
$(".site-header__account")?.addEventListener("click", openAccount);

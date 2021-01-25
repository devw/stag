const { init: initLanding } = require("./landing");
const { init: initSignIn } = require("./sign-in");
const { init: initRegistration } = require("./register");
const { init: initRecovery } = require("./recovery");
const { $q, togglePage } = require("../utils/");
const { LOGIN_BTN, STORAGE_CONFIG, IDs } = require("../config");
const { LANDING_ID } = IDs;

//TODO refactoring too code repetition

const closeApp = () => {
    $q(`.${IDs.CONTAINER_ID}`).style.setProperty("display", "none");
    document.body.classList.remove("remove-scrolling");
};

const initContainer = () => {
    $(LOGIN_BTN)?.addEventListener("click", openAccount, true);
    $q(`.js-close`).addEventListener("click", closeApp);
};

const placePopover = (e, dom) => {
    const shift = parseInt(getComputedStyle(dom).getPropertyValue("width"));
    dom.style.setProperty("left", `${e.clientX - shift / 2}px`);
    dom.style.setProperty("top", `${e.clientY + 20}px`);
};

const openAccount = (e) => {
    const { isActive } = JSON.parse(localStorage.getItem(STORAGE_CONFIG));
    //TODO isActive to fix
    if (!globalThis.__st?.cid) {
        e?.preventDefault();
        e?.stopPropagation();
        document.body.classList.add("remove-scrolling");
        togglePage(LANDING_ID);
        const dom = $q(`.${IDs.CONTAINER_ID}`);
        dom.style.setProperty("display", "flex");
        if (dom.classList.contains("popover")) placePopover(e, dom);
    }
};
exports.openAccount = openAccount;
const $ = document.querySelector.bind(document);

exports.loadActions = () => {
    initContainer();
    initLanding();
    initSignIn();
    initRegistration();
    initRecovery();
};

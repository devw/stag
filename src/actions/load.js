const { init: initLanding } = require('./landing');
const { init: initSignIn } = require('./sign-in');
const { init: initRegistration } = require('./register');
const { init: initRecovery } = require('./recovery');
const { init: initActivate } = require('./activate');
const { $q, $qq, togglePage, getUrlParameter } = require('../utils/');
const { IDs, STORAGE_CONFIG } = require('../config');

//TODO refactoring too code repetition

const getLoginBtns = () =>
    document.body.querySelectorAll('[href="/account/login"]');

const closeApp = () => {
    $q(`#${IDs.CONTAINER_ID}`).style.setProperty('display', 'none');
    document.body.classList.remove('remove-scrolling');
};

const initContainer = () => {
    const LINK_BTNs = getLoginBtns();
    LINK_BTNs.forEach((e) => e?.addEventListener('click', openAccount, true));
    $q(`.js-close`).addEventListener('click', closeApp);
};

const placePopover = (e, el) => {
    const shift = parseInt(getComputedStyle(el).getPropertyValue('width'));
    el.style.setProperty('left', `${e.clientX - shift / 2}px`);
    el.style.setProperty('top', `${e.clientY + 20}px`);
};

const openAccount = (e) => {
    if (!globalThis.__st?.cid) {
        e?.preventDefault();
        e?.stopPropagation();
        document.body.classList.add('remove-scrolling');
        togglePage(IDs.LANDING_ID);
        const el = $q(`#${IDs.CONTAINER_ID}`);
        el.style.setProperty('display', 'flex');
        if (el.classList.contains('popover')) placePopover(e, el);
    }
};

const goToLanding = () => togglePage(IDs.LANDING_ID);

const setBackBtn = () =>
    $qq(`.js-back`).forEach((e) => e.addEventListener('click', goToLanding));

const isDisable = () => {
    const { isActive } = JSON.parse(localStorage.getItem(STORAGE_CONFIG));
    return (
        isActive === false && getUrlParameter('preview_login_popup') !== 'true'
    );
};

exports.loadActions = () => {
    if (!isDisable()) {
        const loginBtns = getLoginBtns();
        loginBtns.forEach((e) =>
            e?.addEventListener('click', (e) => e.preventDefault(), true)
        );
        initContainer();
    }
    initLanding();
    initSignIn();
    initRegistration();
    initRecovery();
    initActivate();
    require('../services/customize-handler');
    setBackBtn();
};

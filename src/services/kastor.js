const { updateCss, updatePages, toggleModules, $q } = require("../utils");
const { getTheme } = require("./proxy");
const { init } = require("../actions/register");

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

const kastorHandler = (event) => {
    const body = event.data ? event.data.data : event.detail;
    if (!body.setting_id) return null;

    const [, page, key, unit] = body.setting_id.match(/^(.*?)\|(.*?)\|(.*?)$/);
    const value = `${body.value}${unit}`;

    if (/^--/.test(key)) updateCss({ [key]: value });
    else updatePages({ [key]: value == "false" ? false : value });

    if (page) {
        toggleModules(page);
        $q(".container").style.setProperty("display", "flex");
        init();
    }
};

exports.kastor = () => {
    console.log("loading kastor handler");
    globalThis.addEventListener("message", debounce(kastorHandler, 500));
};

// ***** 4 different popup *****+
// 1) popup-centered
// 2) popup-floating
// 3) popup-full
// 4) popup-drawer
const changePopupMode = (mode) => {
    const $q = document.querySelector.bind(document);
    // TODO prevMode should be taken via GET http (config.json)
    let prevMod = "popup-centered";
    console.log(`// ***** 4 different popup *****+
    // 1) popup-centered
    // 2) popup-floating
    // 3) popup-full
    // 4) popup-drawer`);
    return (mode) => {
        globalThis.scrollTo(0, 0);
        document.querySelector("body").classList.add("remove-scrolling");
        $q(".container").classList.remove(prevMod);
        $q(".container").classList.add(mode);
        prevMod = mode;
    };
};
globalThis.__changePopupMode = changePopupMode();

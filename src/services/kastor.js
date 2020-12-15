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

const sectionSettings = ({ sectionName, setting_id, value }) => {
    if (setting_id) updatePages({ [setting_id]: value });
    const section = sectionName.replace(/-section/, "");
    toggleModules(section);
    $q(".container").style.setProperty("display", "flex");
};

const generalSettings = ({ setting_id, value }) => {
    if (/font-size|text-size|border-radius/.test(setting_id)) {
        console.log("Event received from Customize", setting_id, value);
        updateCss({ [setting_id]: `${value}em` });
    }
    // if (/text-color/.test(setting_id)) {
    else {
        console.log("Event received from Customize", setting_id, value);
        updateCss({ [setting_id]: `${value}` });
    }
};

const showSlider = ({ setting_id, value }) => {
    updatePages({ [setting_id]: value });
    toggleModules("register");
    $q(".container").style.setProperty("display", "flex");
    init();
};

const kastorHandler = (event) => {
    const body = event.data.data;
    // TODO improve this part
    const sectionName =
        body.section_type_id || body.section_type || body.setting_id;
    if (!sectionName) return null;
    body.sectionName = sectionName;
    if (sectionName === "change-theme")
        getTheme(body.value).then((theme) => updateCss(theme.style));
    else if (sectionName === "hasCarousel") showSlider(body);
    else if (/^--/.test(sectionName)) generalSettings(body);
    else sectionSettings(body);
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
    // TODO fix it, remove hardcoded value
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

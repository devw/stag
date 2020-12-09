const { updateCss, updatePages, toggleModules, $q } = require("../utils");
const { getTheme } = require("./proxy");

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
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
    if (/text-color/.test(setting_id)) {
        console.log("Event received from Customize", setting_id, value);
        updateCss({ [setting_id]: `${value}` });
    }
};

const kastorHandler = (event) => {
    const body = event.data.data;
    // TODO improve this part
    const sectionName =
        body.section_type_id || body.section_type || body.setting_id;
    body.sectionName = sectionName;
    if (sectionName === "change-theme")
        getTheme(body.value).then((theme) => updateCss(theme.style));
    else if (/^--/.test(sectionName)) generalSettings(body);
    else sectionSettings(body);
};

const changeTheme = (themeName) =>
    getTheme(themeName).then((theme) => updateCss(theme.style));

exports.kastor = () => {
    console.log("loading kastor handler");
    globalThis.addEventListener("message", (e) => debounce(kastorHandler, 500));
};

const { updateCss, updatePages, toggleModules, $q } = require("../utils");

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

const sectionSettings = ({ section_type_id, setting_id, value }) => {
    if (setting_id) updatePages({ [setting_id]: value });
    const section = section_type_id.replace(/-section/, "");
    toggleModules(section);
    $q(".container").style.setProperty("display", "flex");
};

globalThis.__updatePages = (json) => {
    updatePages(json);
    const section_type_id = "landing-section";
    toggleModules(section_type_id.replace(/-section/, ""));
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
    console.log("sasassa:", event);
    const body = event.data.data;
    const hasSection = body.section_type_id;

    hasSection ? sectionSettings(body) : generalSettings(body);
};

exports.kastor = () => {
    console.log("loading kastor handler");
    globalThis.addEventListener("message", kastorHandler);
};

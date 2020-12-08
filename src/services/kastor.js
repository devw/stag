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

const sectionSettings = ({ section_type_id }) => {
    toggleModules(section_type_id.replace(/-section/, ""));
};
globalThis.__updatePages = (() => {
    const fn = (json = { loginRegister: "Iscriviti" }) => {
        updatePages(json);
        const section_type_id = "landing-section";
        toggleModules(section_type_id.replace(/-section/, ""));
        $q(".container").style.setProperty("display", "flex");
    };
    return debounce(fn, 2000);
})();

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
    const hasSection = body.section_type_id;

    hasSection ? sectionSettings(body) : generalSettings(body);
};

exports.kastor = () => {
    console.log("loading kastor handler");

    globalThis.addEventListener("message", kastorHandler);
};

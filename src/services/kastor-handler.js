const { updateCss, updatePages, toggleModules, $q } = require("../utils");
const { getTheme } = require("./proxy");

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

const kastorHandler = (event) => {
    const { setting_id, value } = event.data ? event.data.data : event.detail;

    if (!setting_id) return null;

    const [, page, key, unit] = setting_id.match(/^(.*?)\|(.*?)\|(.*?)$/);
    const valueAndUnit = typeof value == "object" ? value : `${value}${unit}`;

    if (key === "change-theme")
        getTheme(value).then((theme) => updateCss(theme.style));
    else if (/^--/.test(key)) updateCss({ [key]: valueAndUnit });
    else updatePages({ [key]: valueAndUnit == "false" ? false : valueAndUnit });

    if (page) {
        toggleModules(page);
        $q(".container").style.setProperty("display", "flex");
    }
};

exports.kastor = () => {
    console.log("loading kastor handler");
    globalThis.addEventListener("message", debounce(kastorHandler, 500));
};

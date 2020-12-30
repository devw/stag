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

const getEventData = (event) => {
    const data = event.data ? event.data.data : event.detail;
    const { setting_id, section_type, block_type_id, value } = data;
    const selector = setting_id || section_type || block_type_id;
    return [selector, value];
};

const kastorHandler = (event) => {
    const [selector, value] = getEventData(event);
    if (!selector) return null;
    const [, page, key, unit] = selector.match(/^(.*?)\|(.*?)\|(.*?)$/);
    const valueAndUnit = typeof value == "object" ? value : `${value}${unit}`;
    if (key === "change-theme")
        getTheme(value).then((theme) => updateCss(theme.style));
    else if (/^--/.test(key)) updateCss({ [key]: valueAndUnit });
    else updatePages({ [key]: valueAndUnit == "false" ? false : valueAndUnit });

    if (page) {
        toggleModules(page);
        $q(".container").style.setProperty("display", "flex");
        init();
    }
};

exports.kastorHandler = () => {
    console.log("loading kastor handler");
    globalThis.addEventListener("message", debounce(kastorHandler, 500));
};

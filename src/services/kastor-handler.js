const {
    updateCss,
    updatePages,
    toggleModules,
    $q,
    showError,
} = require("../utils");
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
    const e = event.data ? event.data : event.detail;
    const data = e.data;
    if (!data) return [undefined, undefined];
    const { setting_id, section_type, block_type_id } = data;
    const value = e.target == "block:remove" ? false : data.value;
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

    // TODO: too fragile check the password policy in this way, you should refactore the code using objects
    if (/^psw.*Err$/.test(key)) showError([value]);
};

// shopify events
const redirectPage = () => {
    if (__st?.cid) {
        window.location.href = "./products";
        globalThis.removeEventListener("message", redirectPage, true);
    }
};

exports.kastorHandler = () => {
    console.log("loading kastor handler");
    globalThis.addEventListener("message", debounce(kastorHandler, 500));
    globalThis.addEventListener("message", redirectPage, true);
};

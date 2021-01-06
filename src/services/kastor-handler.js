const { updatePages, $q, showError } = require("../utils");
const { getTheme } = require("./proxy");

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

const changePage = (page) => {
    const { loadActions } = require("../actions/load");
    const { toggleModules } = require("../utils");
    toggleModules(page);
    $q(".container").style.setProperty("display", "flex");
    loadActions();
};

const reorderFields = ({ blocks, order }) => {
    const hash_block = {};
    Object.keys(blocks).forEach((e) => {
        if (Object.keys(blocks[e])[0])
            hash_block[Object.keys(blocks[e])[0]] = e.split("|")[1];
    });
    order.forEach((e, i) => {
        if (hash_block[e]) {
            const selector = `.${hash_block[e]}`;
            $q(selector).style.setProperty("order", i);
        }
    });

    changePage("register");
};

const parseEventData = (event) => {
    const e = event.data ? event.data : event.detail.data;
    const data = e.data;
    if (e.target === "block:reorder") {
        reorderFields(data);
        return [undefined, undefined];
    }
    if (!data) return [undefined, undefined];
    const { setting_id, section_type, block_type_id } = data;
    const value = e.target == "block:remove" ? false : data.value;
    const selector = setting_id || section_type || block_type_id;
    return [selector, value];
};

const kastorHandler = (event) => {
    const [selector, value] = parseEventData(event);
    if (!selector) return null;
    const [, page, key, unit] = selector.match(/^(.*?)\|(.*?)\|(.*?)$/);
    const valueAndUnit = typeof value == "object" ? value : `${value}${unit}`;
    const { updateCss } = require("../utils");
    if (!/--animation/.test(key)) updateCss({ "--animation": "none" });
    if (key === "change-theme")
        getTheme(value).then((theme) => updateCss(theme.style));
    else if (/^--/.test(key)) {
        updateCss({ [key]: valueAndUnit });
    } else
        updatePages({ [key]: valueAndUnit == "false" ? false : valueAndUnit });

    if (page) changePage(page);
    // TODO: too fragile check the password policy in this way, you should refactore the code using objects
    if (/^psw.*Err$/.test(key)) showError([value]);
};

exports.kastorHandler = () =>
    globalThis.addEventListener("message", debounce(kastorHandler, 500));

const { updateCss, render, parseConfiguration } = require("../utils/");
const { $q, $qq, togglePage, sortBlocks } = require("../utils/toggle");
const { cleanChoiceBlock, cleanDateBlocks } = require("../utils/cleanConfig");
const { IDs, STORAGE_CONFIG } = require("../config");
const { loadActions } = require("../actions/load");

let TEXT;

const changePage = (page) => {
    togglePage(page);
    sortBlocks();
    $q(`#${IDs.CONTAINER_ID}`).style.setProperty("display", "flex");
    loadActions();
    disableBtns();
};

const disableBtn = (e) => {
    e.style.setProperty("pointer-events", "none");
    e.parentNode.style.setProperty("cursor", "not-allowed");
};

const disableBtns = () => {
    $qq("form button").forEach(disableBtn);
    const closeBtn = $q(".js-close");
    closeBtn.style.setProperty("pointer-events", "none");
};

const getData = (event) => {
    const e = event.data ? event.data : event.detail.data;
    return e.data;
};

const getTarget = (event) => {
    const e = event.data ? event.data : event.detail.data;
    return e?.target;
};

const parseEventData = (event) => {
    const data = getData(event);
    if (!data) return [undefined, undefined];
    const { setting_id, section_type, block_type_id } = data;
    const value = getData(event) == "block:remove" ? false : data.value;
    const selector = setting_id || section_type || block_type_id;
    return [selector, value];
};

const showWrongPsw = () => ($q(".js-signin-err").style.display = "block");

const showPswError = (message) => {
    const e = "[name='customer[password]']";
    const exclamationLabel = $q(e).parentNode.querySelector(".label-error");
    exclamationLabel.innerHTML = exclamationLabel.innerHTML.split("</i>")[0];
    exclamationLabel.style.display = "block";
    exclamationLabel.append(message);
};

const renderCustomize = (newText) => {
    const config = getConfig();
    config.text = updateText(newText);
    parseConfiguration(config);
    render(config.text);
};

const showErrors = () => {
    $qq("label.label-error").forEach((e) => (e.style.display = "block"));
    // TODO refactor
    const s =
        "form.label-fixed-bottom label+label, form.label-fixed-top label+label";
    $qq(s).forEach((e) => (e.previousElementSibling.style.display = "none"));
    showPswError("Password should have at least 5 characters!");
};

const updateText = (newText) => {
    const key = Reflect.ownKeys(newText)[0];
    TEXT[key] = newText[key];
    return TEXT;
};

const updateNoBlock = (event) => {
    const [selector, value] = parseEventData(event);

    if (!selector) return null;
    const [, page, key, unit] = selector.match(/^(.*?)\|(.*?)\|(.*?)$/);
    const valueAndUnit = typeof value == "object" ? value : `${value}${unit}`;

    if (!/--animation/.test(key)) updateCss({ "--animation": "none" });
    if (/^--/.test(key)) {
        if (key == "--input-padding") {
            const left = valueAndUnit.trim().split(" ").slice(-1)[0];
            updateCss({ "--label-left": left });
        }
        updateCss({ [key]: valueAndUnit });
    } else
        renderCustomize({
            [key]: valueAndUnit == "false" ? false : valueAndUnit,
        });

    if (page) changePage(page);

    // TODO: too fragile check the password policy in this way, you should refactor the code using objects
    if (/^psw.*Err$/.test(key)) showPswError(value);
    if (/^error|^--error-/.test(key)) showErrors();
    if (/^wrongPsw$/.test(key)) showWrongPsw();
};

//TODO you should refactor the config.yml to avoid this dirty code
const cleanObject = (block_settings) => {
    const keys = Reflect.ownKeys(block_settings);
    const getNewKey = (k) => k.split("|")[1];
    return keys.reduce((a, c) => {
        return { ...a, [getNewKey(c)]: block_settings[c] };
    }, {});
};

const getConfig = () => JSON.parse(localStorage.getItem(STORAGE_CONFIG));

const kastorHandler = (event) => {
    if (!TEXT) TEXT = getConfig()["text"];
    //reorder blocks
    console.log("kastorHandler: ", event);
    const target = getTarget(event);
    const data = getData(event);
    const { block_type_id, block_id, state } = data;

    // TODO refactor
    if (state && /customer\[email|password\]/.test(state.name)) {
        console.log("TEXT ###########", TEXT["inputBlocks"]);
        const { block_id, name } = state;
        $q(`[name='${name}']`).parentNode.setAttribute("block-id", block_id);

        const block = TEXT["inputBlocks"].find((e) => e.name === name);
        block.id = block_id;

        renderCustomize({ inputBlocks: TEXT["inputBlocks"] });
        changePage("register");
        return null;
    }

    if (target === "block:reorder") {
        const { order } = data;
        // TODO sometimes you use renderCustomize and other render!!
        renderCustomize({ blocks_order: order });
        changePage("register");
        return null;
    }
    //TODO refactor
    const isBlock = /dateBlocks|inputBlocks|choiceBlocks/.test(block_type_id);
    if (isBlock) {
        const { block_settings } = data;
        const blocks = block_type_id.split("|")[1];
        const { value, setting_id } = data;
        if (target === "block:add") {
            if (!TEXT[blocks]) TEXT[blocks] = [];
            TEXT[blocks].push({
                id: block_id,
                ...cleanObject(block_settings),
            });
            if (TEXT.blocks_order) {
                TEXT.blocks_order.push(block_id);
            } else {
                TEXT.blocks_order = [block_id];
            }
        } else if (target === "setting:update") {
            const key = setting_id.split("|")[1];
            const block = TEXT[blocks].find((e) => e.id === block_id);
            block[key] = value;
            if (/^error|^--error-/.test(key)) showErrors();
        } else if (target === "block:remove") {
            TEXT[blocks] = TEXT[blocks].filter((e) => e.id !== block_id);
        }
        TEXT = cleanChoiceBlock(TEXT);
        TEXT = cleanDateBlocks(TEXT);
        render(TEXT);
        changePage("register");
        return null;
    }

    updateNoBlock(event);
};
if (
    /config_id/.test(location.href) ||
    window.location !== window.parent.location
) {
    globalThis.addEventListener("message", kastorHandler);
    setTimeout(() => changePage("landing"), 0);
}

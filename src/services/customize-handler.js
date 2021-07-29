const { updateCss, render, parseConfiguration } = require("../utils/index.js");
const { $q, $qq, togglePage, sortBlocks } = require("../utils/toggle.js");
const { cleanChoiceBlock, cleanDateBlocks } = require("../utils/clean-config.js");
const { IDs, STORAGE_CONFIG } = require("../config.js");
const { loadActions } = require("../actions/load.js");
const { loadTheme } = require("../actions");
const { parseConfiguration: parseState } = require("../utils/cutomize.utils");

let TEXT;

const activatePatch = ({ event, page }) => {
    const data = getData(event);
    if (page !== "activate") return null;
    const { block_id } = data;
    $q(".content #activate.partials").style.animation = "none";
    const selector = block_id ? `[block-id="${block_id}"]` : ".activate-no-tag";
    $q(selector).style.display = "block";
}

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

const getState = (event) => {
    const e = event.data ? event.data : event.detail.data;
    return e.state;
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
    const s = "form.label-fixed-bottom label+label, form.label-fixed-top label+label";
    $qq(s).forEach((e) => (e.previousElementSibling.style.display = "none"));
    showPswError("Password should have at least 5 characters!");
};

const updateText = (newText) => {
    const key = Reflect.ownKeys(newText)[0];
    TEXT[key] = newText[key];
    return TEXT;
};

const mendInputPadding = (padding, formStyle) => {
    const ps = padding.split(" ");
    if (formStyle === "label-go-up") {
        ps.splice(0, 1, "18px");
        ps.splice(2, 1, "7px");
        return ps.join(" ");
    }
    if (formStyle === "label-go-down") {
        ps.splice(0, 1, "8px");
        ps.splice(2, 1, "12px");
        return ps.join(" ");
    }
    return ps.join(" ");
};

const updateNoBlock = (event) => {
    const [selector, value] = parseEventData(event);

    if (!selector) return null;
    const [, page, key, unit] = selector.match(/^(.*?)\|(.*?)\|(.*?)$/);
    let valueAndUnit = typeof value == "object" ? value : `${value}${unit}`;

    if (!/--animation/.test(key)) updateCss({ "--animation": "none" });
    if (/^--/.test(key)) {
        if (key == "--input-padding") {
            const padding = (valueAndUnit.trim()).split(" ");
            const [left, bottom] = [padding[3], padding[2]];
            updateCss({ "--label-left": left, "--label-bottom": bottom });
        }
        updateCss({ [key]: valueAndUnit });
    } else {
        if (key == "formStyle") {
            const padding = getComputedStyle(
                document.querySelector("#login-popup")
            ).getPropertyValue("--input-padding");
            const p = mendInputPadding(padding, valueAndUnit);
            console.log("#########à\n", p, { [key]: valueAndUnit });
            updateCss({ "--input-padding": p });
        }

        renderCustomize({
            [key]: valueAndUnit == "false" ? false : valueAndUnit,
        });
    }

    activatePatch({ event, page });
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
    if (!data) return null;
    const { block_type_id, block_id, state } = data;

    const [selector,] = parseEventData(event);
    if (!selector) return null;
    const [, page] = selector.match(/^(.*?)\|(.*?)\|(.*?)$/);

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
    const isBlock = /dateBlocks|inputBlocks|choiceBlocks|activateBlocks/.test(block_type_id);
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
        changePage(page);
        activatePatch({ event, page });
        return null;
    }

    updateNoBlock(event);
};


const parseStateProxy = (message) => {
    // const state = getState(event);
    const { state, event } = message?.data;

    if (!event && !state) return null;
    const { pages, global_sections } = state;
    console.log("-------------state-----------", { pages, global_sections });
    if (!pages) return null;
    loadTheme(parseState({ pages, global_sections }));
    const params = event?.params;
    const [section_type, setting_id] = [params?.section_type, params?.setting_id];
    const page = section_type?.split("|")[0] || setting_id?.split("|")[0];
    if (page && page !== "") { changePage(page); } else {
        changePage("landing");
    }

    // if (!state) return null;
    // window.state = state;

}

if (
    /config_id/.test(location.href) ||
    window.location !== window.parent.location
) {
    // globalThis.addEventListener("message", kastorHandler);
    console.log("------------customize handler-----")
    globalThis.addEventListener("message", parseStateProxy);

    // setTimeout(() => changePage("landing"), 0);
    // if (window.state) { console.log("---scripptTag stata ----", window.state); parseState(window.state); }
}


// globalThis.addEventListener("addonMessage", kastorHandler);
globalThis.addEventListener("addonMessage", parseStateProxy);

window.parent.postMessage("fetchState", '*');

window.parseState = parseState;
window.loadTheme = loadTheme;
window.changePage = changePage;


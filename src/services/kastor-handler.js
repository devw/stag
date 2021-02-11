const {
    togglePage,
    $q,
    $qq,
    updateCss,
    sortBlocks,
} = require("../utils/toggle");

const { IDs, STORAGE_CONFIG } = require("../config");
const { loadActions } = require("../actions/load");

// TODO you should find a more robust solution the globalThis.render
let TEXT;

const changePage = (page) => {
    togglePage(page);
    sortBlocks();
    $q(`#${IDs.CONTAINER_ID}`).style.setProperty("display", "flex");
    loadActions();
    disableBtn();
};

const disableBtn = () => {
    $qq("form button").forEach((e) => {
        e.style.setProperty("pointer-events", "none");
        e.parentNode.style.setProperty("cursor", "not-allowed");
    });
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

const updateNoBlock = (event) => {
    const [selector, value] = parseEventData(event);

    if (!selector) return null;
    const [, page, key, unit] = selector.match(/^(.*?)\|(.*?)\|(.*?)$/);
    const valueAndUnit = typeof value == "object" ? value : `${value}${unit}`;

    if (!/--animation/.test(key)) updateCss({ "--animation": "none" });
    if (/^--/.test(key)) {
        updateCss({ [key]: valueAndUnit });
    } else
        render({
            [key]: valueAndUnit == "false" ? false : valueAndUnit,
        });

    if (page) changePage(page);

    // TODO: too fragile check the password policy in this way, you should refactor the code using objects
    if (/^psw.*Err$/.test(key)) showPswError(value);
    if (/^error|^--error-/.test(key)) showErrors();
    if (/^wrongPsw$/.test(key)) showWrongPsw();
};

const showWrongPsw = () => ($q(".js-signin-err").style.display = "block");

const showPswError = (message) => {
    const e = "[name='customer[password]']";
    const exclamationLabel = $q(e).parentNode.querySelector(".label-error");
    exclamationLabel.innerHTML = exclamationLabel.innerHTML.split("</i>")[0];
    exclamationLabel.style.display = "block";
    exclamationLabel.append(message);
};

const render = (newText) => {
    const text = updateText(newText);
    globalThis.render(text);
};

const showErrors = () => {
    $qq("label.label-error").forEach((e) => (e.style.display = "block"));
    // TODO refactor
    showPswError("Password should have at least 5 characters!");
};

const updateText = (newText) => {
    const key = Reflect.ownKeys(newText)[0];
    TEXT[key] = newText[key];
    return TEXT;
};

const kastorHandler = (event) => {
    if (!TEXT) TEXT = JSON.parse(localStorage.getItem(STORAGE_CONFIG))["text"];
    //reorder blocks
    console.log("kastorHandler: ", event);
    const target = getTarget(event);
    const data = getData(event);
    const { block_type_id, block_id } = data;

    if (target === "block:reorder") {
        const { order } = data;
        order.forEach((e, i) => {
            const selector = `[block-id='${e}']`;
            $q(selector)?.style?.setProperty("order", i);
        });
        $q(`#${IDs.REGISTER_ID} form button`).parentNode.style.order = 99;
        return null;
    }
    //TODO refactor
    if (/dateBlocks/.test(block_type_id)) {
        const { value, setting_id } = data;

        if (target === "block:add") {
            if (!TEXT.dateBlocks) TEXT.dateBlocks = [];
            TEXT.dateBlocks.push({
                id: block_id,
                placeholder: "",
            });
        } else if (target === "setting:update") {
            const key = setting_id.split("|")[1];
            const block = TEXT.dateBlocks.find((e) => e.id === block_id);
            block[key] = value;
            if (/^error|^--error-/.test(key)) showErrors();
        } else if (target === "block:remove") {
            TEXT.dateBlocks = TEXT.dateBlocks.filter((e) => e.id !== block_id);
        }
        globalThis.render(TEXT);

        //TODO do you need changePage?
        changePage("register");
        return null;
    }

    //add a input Blocks
    if (/inputBlocks/.test(block_type_id)) {
        const { value, setting_id } = data;

        if (target === "block:add") {
            if (!TEXT.inputBlocks) TEXT.inputBlocks = [];
            TEXT.inputBlocks.push({
                id: block_id,
                placeholder: "",
            });
        } else if (target === "setting:update") {
            const key = setting_id.split("|")[1];
            const block = TEXT.inputBlocks.find((e) => e.id === block_id);
            block[key] = value;
            if (/^error|^--error-/.test(key)) showErrors();
        } else if (target === "block:remove") {
            TEXT.inputBlocks = TEXT.inputBlocks.filter(
                (e) => e.id !== block_id
            );
        }
        globalThis.render(TEXT);

        //TODO do you need changePage?
        changePage("register");
        return null;
    }
    // adding or updating the block
    if (/choiceBlocks/.test(block_type_id)) {
        //TODO implement this logic for all blocks
        const { value, setting_id } = data;
        if (target === "block:add") {
            if (!TEXT.choiceBlocks) TEXT.choiceBlocks = [];
            TEXT.choiceBlocks.push({ id: block_id });
        } else if (target === "block:remove") {
            TEXT.choiceBlocks = TEXT.choiceBlocks.filter(
                (e) => e.id !== block_id
            );
        } else if (target === "setting:update") {
            const key = setting_id.split("|")[1];
            const block = TEXT.choiceBlocks.find((e) => e.id === block_id);
            block[key] = value;
            console.log(value);
        }

        globalThis.render(TEXT);
        changePage("register");
        return null;
    }

    updateNoBlock(event);
};
if (/config_id/.test(location.href)) {
    globalThis.addEventListener("message", kastorHandler);
    setTimeout(() => changePage("landing"), 0);
}

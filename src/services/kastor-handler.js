const {
    togglePage,
    $q,
    $qq,
    getBlocksAttr,
    updateCss,
} = require("../utils/toggle");

const { IDs } = require("../config");
// TODO you should find a more robust solution the globalThis.render

const changePage = (page) => {
    // this disables the logic of popup
    // const { loadActions } = require("../actions/load");
    togglePage(page);
    $q(`#${IDs.CONTAINER_ID}`).style.setProperty("display", "flex");
    // loadActions();
};

const getIdsVsBlocks = (json) => {
    const idsVsBlocks = Object.keys(json).map((e) => ({
        [Object.keys(json[e])[0]]: e,
    }));
    return idsVsBlocks.filter((e) => Object.keys(e)[0] !== "undefined");
};

const getOrderedBlocks = ({ blocks, order }) => {
    let idsVsBlocks = getIdsVsBlocks(blocks);
    idsVsBlocks = idsVsBlocks.sort(
        (a, b) =>
            order.indexOf(Object.keys(a)[0]) - order.indexOf(Object.keys(b)[0])
    );
    return idsVsBlocks.map((e) => Object.values(e)[0].split("|")[1]);
};

const getData = (event) => {
    const e = event.data ? event.data : event.detail.data;
    return e.data;
};

const getTarget = (event) => {
    const e = event.data ? event.data : event.detail.data;
    return e.target;
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
        globalThis.render({
            [key]: valueAndUnit == "false" ? false : valueAndUnit,
        });

    if (page) changePage(page);

    // TODO: too fragile check the password policy in this way, you should refactor the code using objects
    if (/^psw.*Err$/.test(key)) showPswError(value);
    if (/^errorIcon$|^--error-/.test(key)) showErrors();
    if (/^wrongPsw$/.test(key)) showWrongPsw();
};

const showWrongPsw = () => ($q(".js-signin-err").style.display = "block");

const showPswError = (message) => {
    const exclamationLabel = $q(".hasPassword .label-error");
    exclamationLabel.innerHTML = exclamationLabel.innerHTML.split("</i>")[0];
    exclamationLabel.style.display = "block";
    exclamationLabel.append(message);
};

const showErrors = () => {
    $qq("label.label-error").forEach((e) => (e.style.display = "block"));
    // TODO refactor
    showPswError("Password should have at least 5 characters!");
};

const kastorHandler = (event) => {
    //reorder blocks
    console.log("kastorHandler: ", event);
    const target = getTarget(event);
    if (target === "block:reorder") {
        const orderBlocks = getOrderedBlocks(getData(event));
        globalThis.render({ orderedBlock: orderBlocks });
        changePage(IDs.REGISTER_ID);
        return null;
    }
    //remove block
    if (target === "block:remove") {
        const { block_type_id } = getData(event);
        const blockToDel = block_type_id.split("|")[1];
        const filteredBlocks = getBlocksAttr().filter((e) => e !== blockToDel);
        globalThis.render({ orderedBlock: filteredBlocks });
        globalThis.render({ [blockToDel]: false });
        changePage(IDs.REGISTER_ID);
        return null;
    }
    //add a block
    if (target === "block:add") {
        const { block_type_id, block_settings } = getData(event);
        const [page, blockToAdd] = block_type_id.split("|");
        const key = Object.keys(block_settings)[0].split("|")[1];
        const value = Object.values(block_settings)[0];
        globalThis.render({ [key]: value });
        globalThis.render({ [blockToAdd]: true });
        changePage(page);
        return null;
    }

    updateNoBlock(event);
};

globalThis.addEventListener("message", kastorHandler);

const { updatePages, $q, showError } = require("../utils");
const { getBlocksAttr } = require("../utils/load-pages");

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

const getBlocks = (json) => {
    const blocks = [];
    Object.keys(json).forEach((e) => {
        blocks.push(`${e}${Object.keys(json[e]).length > 0}`);
    });
    return blocks;
};

const showBlocks = (blocks) => {
    blocks.forEach((block) => {
        const [, name, display] = block.split("|");
        console.log(name, display, typeof display);
        updatePages({ [name]: display === "false" ? false : true });
    });
    changePage("register");
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

    // console.log(blocks_order);
    // blocks_order.filter((e) => blocks);
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

    const { updateCss } = require("../utils");
    if (!/--animation/.test(key)) updateCss({ "--animation": "none" });
    if (/^--/.test(key)) {
        updateCss({ [key]: valueAndUnit });
    } else
        updatePages({ [key]: valueAndUnit == "false" ? false : valueAndUnit });

    if (page) changePage(page);
    // TODO: too fragile check the password policy in this way, you should refactore the code using objects
    if (/^psw.*Err$/.test(key)) showError([value]);
};

const kastorHandler = (event) => {
    //reorder blocks
    const target = getTarget(event);
    if (target === "block:reorder") {
        const orderBlocks = getOrderedBlocks(getData(event));
        updatePages({ orderedBlock: orderBlocks });
        changePage("register"); // TODO remove magic number
        return null;
    }
    //remove block
    if (target === "block:remove") {
        const { block_type_id } = getData(event);
        const blockToDel = block_type_id.split("|")[1];
        const filteredBlocks = getBlocksAttr().filter((e) => e !== blockToDel);
        updatePages({ orderedBlock: filteredBlocks });
        updatePages({ [blockToDel]: false });
        changePage("register"); // TODO remove magic number
        return null;
    }
    //add a block
    if (target === "block:add") {
        //TODO @Thomas, why two different names? (target: "setting:update")
        const { block_type_id, block_settings } = getData(event);
        const [page, blockToAdd] = block_type_id.split("|");
        const key = Object.keys(block_settings)[0].split("|")[1];
        const value = Object.values(block_settings)[0];
        updatePages({ [key]: value });
        updatePages({ [blockToAdd]: true });
        changePage(page);
        return null;
    }

    updateNoBlock(event);
};

exports.kastorHandler = () =>
    globalThis.addEventListener("message", debounce(kastorHandler, 500));

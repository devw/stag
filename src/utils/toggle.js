const { IDs } = require("../config");

const getRootNode = () => document.querySelector(`#${IDs.APP_ID}`);
const $q = (leaf) => getRootNode().querySelector(leaf);
const $qq = (leaf) => getRootNode().querySelectorAll(leaf);

const getBlocksAttr = () => {
    const blocks = $q(`#${IDs.REGISTER_ID} form`).getAttribute("blocks_order");
    return blocks.length > 0 ? blocks.split(",") : [];
};

const filterCss = (view) => {
    // TODO you should wrap the value based on the regexp /^http/
    const pics = ["--container-bg-image", "--header-img"];
    pics.forEach((e) => {
        if (view[e]) view[e] = `url(${view[e]})`;
    });
    return view;
};

exports.sortBlocks = () => {
    const blocks = getBlocksAttr();
    blocks.forEach((e, i) => {
        const selector = `[block-id='${e}']`;
        $q(selector)?.style?.setProperty("order", i);
    });
    $q(`#${IDs.REGISTER_ID} form button`).parentNode.style.order = 99;
};

exports.updateCss = (cssVars) => {
    cssVars = filterCss(cssVars);
    (function traverse(obj, key) {
        if (obj !== null && typeof obj == "object") {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else getRootNode().style.setProperty(key, obj);
    })(cssVars);
};

exports.toggleSecret = ({ target }) => {
    const secret = target.nextElementSibling;
    secret.type = secret.type === "password" ? "text" : "password";
};

exports.toggleLoading = (BTN) => {
    const loading = BTN.querySelector(".fa");
    if (loading.classList.contains("off")) {
        loading.classList.remove("off");
        BTN.setAttribute("disabled", "true");
    } else {
        loading.classList.add("off");
        BTN.removeAttribute("disabled");
    }
};

exports.togglePage = (id) => {
    $qq(".partials").forEach(e => e.classList.remove("partials-show"));
    $q(`#${id}`).classList.add("partials-show");
    $q(`#${id}`)
        ?.querySelector("[type='password']")
        ?.focus();
};

exports.$q = $q;
exports.$qq = $qq;
exports.getBlocksAttr = getBlocksAttr;
exports.getRootNode = getRootNode;

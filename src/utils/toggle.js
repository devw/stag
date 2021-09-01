const { IDs } = require('../config');

const getRootNode = () => document.querySelector(`#${IDs.APP_ID}`);
const $q = (leaf) => getRootNode().querySelector(leaf);
const $qq = (leaf) => getRootNode().querySelectorAll(leaf);

const getBlocksAttr = () => {
    const blocks = $q(`#${IDs.REGISTER_ID} form`).getAttribute('blocks_order');
    return blocks.length > 0 ? blocks.split(',') : [];
};

const filterCss = (cssVars) => {
    // TODO you should wrap the value based on the regexp /^http/
    if (!cssVars) return null;
    const pics = ['--container-bg-image', '--header-img'];
    pics.forEach((e) => {
        if (cssVars[e]) cssVars[e] = `url(${cssVars[e]})`;
    });
    // return view;
};

const mendInputLineDirection = (style) => {
    const dirVal = style['--input-line-direction'];
    if (!dirVal) return null;
    let directions = ['left', 'right', 'top', 'bottom'];
    directions.forEach(
        (e) => (style[`--input-line-${e}`] = 'var(--input-line)')
    );
    if (/all/i.test(dirVal)) return null;
    directions = directions.filter((e) => !new RegExp(e, 'i').test(dirVal));
    directions.forEach((e) => (style[`--input-line-${e}`] = 'none'));
};

exports.sortBlocks = () => {
    const blocks = getBlocksAttr();
    blocks.forEach((e, i) => {
        const selector = `[block-id='${e}']`;
        $q(selector)?.style?.setProperty('order', i);
    });
    $q(`#${IDs.REGISTER_ID} form button`).parentNode.style.order = 99;
};

exports.updateCss = (cssVars) => {
    if (!cssVars) return null;
    mendInputLineDirection(cssVars);
    filterCss(cssVars);
    (function traverse(obj, key) {
        if (obj !== null && typeof obj == 'object') {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else getRootNode().style.setProperty(key, obj);
    })(cssVars);
};

exports.toggleSecret = ({ target }) => {
    target.classList.toggle('fa-eye-slash');
    target.classList.toggle('fa-eye');
    const secret = target.nextElementSibling;
    secret.type = secret.type === 'password' ? 'text' : 'password';
};

exports.toggleLoading = (BTN) => {
    const loading = BTN.querySelector('.fa');
    if (loading.classList.contains('off')) {
        loading.classList.remove('off');
        BTN.setAttribute('disabled', 'true');
    } else {
        loading.classList.add('off');
        BTN.removeAttribute('disabled');
    }
};

exports.togglePage = (id) => {
    $qq('.partials').forEach((e) => e.classList.remove('partials-show'));
    $q(`#${id}`).classList.add('partials-show');
};

exports.$q = $q;
exports.$qq = $qq;
exports.getBlocksAttr = getBlocksAttr;
exports.getRootNode = getRootNode;

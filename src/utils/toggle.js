const { IDs } = require('../config');
const { getShadowDOM } = require('./shadow-dom');

const getRootNode = () => getShadowDOM().shadowRoot.querySelector('div');

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
    if (document.documentElement.clientWidth <= 540) {
        cssVars['--form-width'] = 'auto';
        cssVars['--btn-margin'] = 'auto';
        cssVars['--content-padding'] = '25px';
        cssVars['--form-padding'] = 'auto';
        cssVars['--header-img'] = '';
    }
};

const mendInputLineDirection = (style) => {
    const dirVal = style['--input-border'].split(' ').map((e) => e === 'true');
    if (!dirVal) return null;
    let directions = ['top', 'right', 'bottom', 'left'];
    directions.forEach((e, i) => (style[`--input-line-${e}`] = dirVal[i] ? 'var(--input-line)' : 'None'));
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
    $q('.js-back').style.display = IDs.LANDING_ID === id ? 'none' : 'block';
};

exports.$q = $q;
exports.$qq = $qq;
exports.getBlocksAttr = getBlocksAttr;
exports.getRootNode = getRootNode;

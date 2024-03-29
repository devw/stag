const { IDs } = require('../config');
const { toggleSecret, toggleLoading, $qq } = require('../utils');
const { isFormFilled, areInvalidInputs, sortBlocks, $q } = require('../utils');
const { init: setDatePicker } = require('../utils/date');
const { storeMetafieldIntoShopify } = require('../services');
const { STORAGE_METAFIELD } = require('../config');

const { REGISTER_ID } = IDs;

let FORM, BTN;

const multiChoiceSelector = 'multi-choice';

const getTagOrMetafield = (tag) => `
    [data-is-tag='${tag === 'tag'}']:checked,
    [type='text'][data-is-tag='${tag === 'tag'}'],
    [type='date'][data-is-tag='${tag === 'tag'}'],
    [type='hidden'][data-is-tag='${tag === 'tag'}']
`;

const setOptionStyle = () => {
    const setBorderRadius = (e) => {
        console.log(e);
        const options = e.querySelectorAll("[type='checkbox']");
        if (options.length === 1) return null;
        options.forEach((e) => (e.style.borderRadius = '50%'));
    };
    $qq('.js-opt')?.forEach(setBorderRadius);
};

const onChoiceClick = ({ target, currentTarget }) => {
    if (!currentTarget.classList.contains(multiChoiceSelector)) {
        const options = currentTarget.querySelectorAll("[type='checkbox']");
        if (options.length === 1) return null;
        options.forEach((e) => (e.checked = false));
        target.checked = true;
    }
};

const onSubmit = async (e) => {
    e.preventDefault();
    if (await areInvalidInputs()) return null;
    toggleLoading(BTN);
    storeTags();
    storeMetafield();
    const { sendHttpRequest } = require('../services');
    FORM.action = '/account';
    const resp = await sendHttpRequest('POST', e);
    toggleLoading(BTN);
    console.log('shopify response', resp);
};

const storeTags = () => {
    const tag = getTagOrMetafield('tag');
    const arr = Array.from(FORM.querySelectorAll(tag));
    const tags = arr.map((el) => `${el.getAttribute('data-tag')}${el.value}`);
    //TODO get a delimiter from the customize
    $q('[name="customer[tags]"]').value = tags.join(', ');
};

const storeMetafield = () => {
    const meta = getTagOrMetafield('metafield');
    const arr = Array.from(FORM.querySelectorAll(meta));
    const metafields = arr.map((el) => {
        return {
            namespace: el.getAttribute('data-namespace'),
            key: el.getAttribute('data-key'),
            value: el.value,
        };
    });

    localStorage.setItem(STORAGE_METAFIELD, JSON.stringify(metafields));
    console.log('localStorage', localStorage.getItem(STORAGE_METAFIELD));
};

const toggleButton = () => {
    window.FORM = FORM;
    isFormFilled(FORM) ? BTN.removeAttribute('disabled') : BTN.setAttribute('disabled', 'true');
};

exports.init = () => {
    FORM = $q(`#${REGISTER_ID} form`);
    BTN = FORM.querySelector('button');
    sortBlocks();
    FORM.addEventListener('input', toggleButton);
    FORM.addEventListener('submit', onSubmit);
    FORM.querySelector('.js-show-psw')?.addEventListener('click', toggleSecret);
    $qq('.js-opt')?.forEach((e) => e.addEventListener('click', onChoiceClick));
    storeMetafieldIntoShopify();
    setDatePicker();
    setOptionStyle();
};

const { $q, $qq, togglePage, sortBlocks } = require('../utils/toggle.js');
const { IDs } = require('../config.js');
const { loadActions } = require('../actions/load.js');
const { loadTheme } = require('../actions');
const { parseConfiguration } = require('../utils/cutomize.utils');

window.parsedState = null;

const changePage = (page) => {
    togglePage(page);
    sortBlocks();
    $q(`#${IDs.CONTAINER_ID}`).style.setProperty('display', 'flex');
    loadActions();
    disableBtns();
};

const disableBtn = (e) => {
    e.style.setProperty('pointer-events', 'none');
    e.parentNode.style.setProperty('cursor', 'not-allowed');
};

const disableBtns = () => {
    $qq('form button').forEach(disableBtn);
    const closeBtn = $q('.js-close');
    closeBtn.style.setProperty('pointer-events', 'none');
};

const loadPage = (event) => {
    const params = event?.params;
    const section =
        params?.section_type || params?.setting_id || params?.section_type_id;
    const page = section?.split('|')[0];
    if (page && page !== '') {
        changePage(page);
    } else {
        changePage('landing');
    }
};

const parseState = (state) => {
    const { pages, global_sections } = state;
    if (!pages) return null;
    globalThis.parsedState = parseConfiguration({ pages, global_sections });
    globalThis.parsedState.style['--animation'] = 'none';
    loadTheme(globalThis.parsedState);
};

const loadAnimation = (value) => {
    globalThis.parsedState.style['--animation'] = value;
    loadTheme(globalThis.parsedState);
};

const loadImage = (value) => {
    console.log('value:', value);
};

const parseEvent = (event) => {
    if (!event?.params) return null;
    const { setting_id, value } = event.params;

    if (/--animation/.test(setting_id)) loadAnimation(value);
    if (/--container-bg-image/.test(setting_id)) loadImage(value);
    loadPage(event);
};

const disableClick = () => {
    const nodeApp = document.querySelector(`#${IDs.APP_ID}`);
    nodeApp.style.setProperty('pointer-events', 'none');
};

const parseMessage = (message) => {
    //TODO use closure to avoid global variable window.parsedState
    console.log('-------message--------\n', message);
    const { state, event } = message?.data || message?.detail;
    if (!event && !state) return null;
    disableClick();
    parseState(state);
    parseEvent(event);
};

if (
    window.location !== window.parent.location ||
    /:\/\/localhost/.test(window.location.origin)
) {
    console.log('-----customize handler-----');
    globalThis.parseConfiguration = parseConfiguration;
    globalThis.addEventListener('message', parseMessage);
    globalThis.addEventListener('addonMessage', parseMessage);
}

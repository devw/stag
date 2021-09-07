var _event = {
    action: 'trigger',
    target: 'setting:update',
    params: {
        value: 'fade-in-show',
        setting_id: 'register|--animation|',
        global_section_group_id: 'theme',
        global_section_id: 'theme',
    },
};
var detail = {};
var customizeEvent = new CustomEvent('message', { detail });
var el = document.body
    .querySelector('login-popup')
    .shadowRoot.querySelector('div');
detail.state = state;
detail.event = _event;
globalThis.dispatchEvent(customizeEvent);

(() => {
    el.style.setProperty('pointer-events', 'all');
    // el.style.setProperty('--large-font-size', '2em');
    // el.style.setProperty('--img-position', 'column');
    // el.style.setProperty('--form-width', '500px');
    // el.style.setProperty('--form-padding', '10px');
})();

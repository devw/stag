const { $q } = require('../utils/toggle.js');
const { IDs } = require('../config.js');

exports.showMessage = (message, messageType = 'info') => {
    const node = document.createElement('div');
    const icons = { info: '&#8505;', warn: '&#9888;' };

    node.setAttribute('class', 'bar');
    $q(`.${IDs.NOTIFICATION}`).appendChild(node);
    node.classList.add(messageType);

    setTimeout(() => {
        node.innerHTML = `<div class="ico"><i>${icons[messageType]}</i></div>
          <div class="message">${message}</div>
          <div class="close" onclick="this.parentElement.remove()">&times;</div>`;
        node.classList.add('bar-show');
    }, 600);
};

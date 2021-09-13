const { $q } = require('../utils/toggle.js');
const { IDs } = require('../config.js');

exports.showMessage = (message, messageType = 'info') => {
    const node = document.createElement('div');
    const icons = { info: '&#8505;', warn: '&#9888;' };

    node.setAttribute('class', 'bar');
    $q(`.${IDs.NOTIFICATION}`).appendChild(node);
    node.classList.add(messageType);

    setTimeout(() => {
        node.innerHTML = `<div class="close" onclick="this.parentElement.remove()">&times;</div>
        <i class="ico">${icons[messageType]}</i>
      ${message}`;
        node.classList.add('bar-show');
    }, 1000);
};

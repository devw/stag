const { $q } = require('../utils/toggle.js');
const { IDs } = require('../config.js');

exports.showMessage = (message, messageType = 'info-circle') => {
    const node = document.createElement('div');

    node.setAttribute('class', 'bar');
    $q(`.${IDs.NOTIFICATION}`).appendChild(node);
    node.classList.add(messageType);

    setTimeout(() => {
        node.innerHTML = `<div class="ico"><i class="fa fa-${messageType} fa-lg" aria-hidden="true"></i></div>
          <div class="message">${message}</div>
          <div class="close" onclick="this.parentElement.remove()">&times;</div>`;
        node.classList.add('bar-show');
    }, 600);
};

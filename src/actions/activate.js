const { IDs } = require('../config');
const { $q, toggleLoading } = require('../utils');
const { sendInvite } = require('../services');

exports.init = () => {
    const FORM = $q(`#${IDs.ACTIVATE_ID} form`);
    FORM.addEventListener('submit', onSubmit);
};

const onSubmit = async (e) => {
    e.preventDefault();
    const cid = $q('[name="customer-id"]').value;
    const btn = e.path[0].querySelector('button');
    toggleLoading(btn);
    await sendInvite(cid);
    toggleLoading(btn);
    $q('.js-close').click();
};

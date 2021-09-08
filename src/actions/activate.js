const { IDs } = require('../config');
const { $q } = require('../utils');
const { sendInvite } = require('../services');

exports.init = () => {
    const FORM = $q(`#${IDs.ACTIVATE_ID} form`);
    FORM.addEventListener('submit', onSubmit);
};

const onSubmit = async (e) => {
    e.preventDefault();
    const cid = $q('[name="customer-id"]').value;
    sendInvite(cid);
};

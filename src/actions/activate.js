const { IDs } = require('../config');
const { ACTIVATE_ID } = IDs;
const { $q } = require('../utils');
const { sendInvite } = require('../services');

let FORM;

exports.init = () => {
    FORM = $q(`#${ACTIVATE_ID} form`);
    FORM.addEventListener('submit', onSubmit);
};

const onSubmit = async (e) => {
    e.preventDefault();
    console.log('customer-id: ', $q('[name="customer-id"]'));
    const cid = $q('[name="customer-id"]').value;
    sendInvite(cid);
};

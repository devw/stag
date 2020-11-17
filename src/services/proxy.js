const { AWS_ENDPOINT } = require("../config.js");

exports.registerViaProxy = async (inputs) => {
    const response = await fetch(`${AWS_ENDPOINT}/user/add/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
    });
    return response.json();
};

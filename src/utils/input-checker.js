exports.isValidPsw = (value) => value.length > 4;
exports.isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

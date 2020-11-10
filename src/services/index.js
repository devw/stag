/*******  .src/service/index.js *********/

exports.isRegistered = async (email) => {
    //TODO use AWS endpoint
    return new Promise((res, _) => {
        setTimeout(() => res(/@gm/.test(email)), 500);
    });
};

exports.isLogged = async (email, psw) => {
    //TODO use shop endpoint
    return new Promise((res, _) => {
        setTimeout(() => res(/@gm/.test(email) && /a/.test(psw)), 500);
    });
};

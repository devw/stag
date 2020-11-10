exports.isRegistered = async (email) => {
    //TODO use AWS endpoint
    return new Promise((res, rej) => {
        setTimeout(() => res(/@gm/.test(email)), 500);
    });
};

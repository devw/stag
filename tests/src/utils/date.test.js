const { init } = require("../../../src/utils/date");

describe("Date Test", () => {
    it.only("It should give an error if the password length is less than 5 characters", async () => {
        console.log("initiasssadsa.....", init());
        expect(init()).toBe(undefined);
    });
});

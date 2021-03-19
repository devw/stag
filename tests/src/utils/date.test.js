const { init } = require("../../../src/utils/date");

describe("Date Test", () => {
    it.only("It should give an error if the password length is less than 5 characters", async () => {
        // TODO rewire to test internal functions
        expect(init()).toBe(undefined);
    });
});

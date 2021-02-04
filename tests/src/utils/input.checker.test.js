const { areInvalidInputs } = require("../../../src/utils/input-checker");
const { IDs } = require("../config");
jest.mock("../../../src/utils/toggle", () => require("./__mocks__/$q"));

describe("Proxy Test", () => {
    beforeEach(() => {
        const form = document.createElement("form");
        form.innerHTML = `<input type="password" name="customer[password]"/>`;
        this.form = form;
    });

    it("shoud be true if there are not checks", async () => {
        globalThis.localStorage.setItem(
            "shopify-loginpopup-configuration",
            JSON.stringify({
                text: {},
            })
        );
        const resetErrorMsgs = jest.fn(() => 1);
        const result = areInvalidInputs(this.form);
        expect(result).toBe(true);
    });

    it("should be false if the password length is less than the pswMinLength", async () => {
        globalThis.localStorage.setItem(
            "shopify-loginpopup-configuration",
            JSON.stringify({
                text: { pswMinLength: 5 },
            })
        );
        const resetErrorMsgs = jest.fn(() => 1);
        const result = areInvalidInputs(this.form);
        expect(result).toBe(false);
    });
});

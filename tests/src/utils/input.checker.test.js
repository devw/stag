const { areInvalidInputs } = require("../../../src/utils/input-checker");
const formHtml = require("./__mocks__/form.mock.html");
jest.mock("../../../src/utils/toggle", () => require("./__mocks__/index.mock"));

describe("Proxy Test", () => {
    test.only("It should give an error if the password length is less than 5 characters", async () => {
        const form = document.createElement("form");
        form.innerHTML = formHtml;
        console.log("form.innerHTML.....", form.innerHTML, form);
        document.body.appendChild(form);
        const resetErrorMsgs = jest.fn(() => 1);
        expect(areInvalidInputs()).toBe(true);
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

const { areInvalidInputs } = require("../../../src/utils/input-checker");
const formHtml = require("./__mocks__/form.mock.html");
jest.mock("../../../src/utils/toggle", () => require("./__mocks__/index.mock"));

describe("Proxy Test", () => {
    const form = document.createElement("form");
    form.innerHTML = formHtml;
    document.body.appendChild(form);
    it("It should give an error if the password length is less than 5 characters", async () => {
        form.querySelector("[type='password']").value = "123";
        expect(areInvalidInputs()).toBe(true);
    });

    it("It should give no error if the password length is greater than 5 characters", async () => {
        form.querySelector("[type='password']").value = "1234567";
        expect(areInvalidInputs()).toBe(false);
    });
});

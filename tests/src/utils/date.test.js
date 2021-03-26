const { describe, it, expect } = global;
const { init } = require("../../../src/utils/date");
const dateHtml = require("./__mocks__/date.mock.html");
const moment = require("moment");
const rewire = require("rewire");
jest.mock("../../../src/utils/toggle", () => require("./__mocks__/index.mock"));
const dateModule = rewire("../../../src/utils/date.js");

describe("yaate Test", () => {
    const dateBlock = document.createElement("form");
    dateBlock.innerHTML = dateHtml;
    document.body.appendChild(dateBlock);

    global.window = Object.create(window);
    Object.defineProperty(window, "moment", { value: moment });

    const getDateAttrs = dateModule.__get__("getDateAttrs");

    it("getDateAttrs should give an object", async () => {
        const el = document.querySelector(".picker-date");
        const attrs = getDateAttrs(el);
        expect(attrs.minDate).toBeDefined();
    });
    it("getStartEnd should give an object", async () => {
        // TODO rewire to test internal functions
        const el = document.querySelector(".picker-date");
        const getStartEnd = dateModule.__get__("getStartEnd");
        dateModule.__set__({ moment: moment });
        const { minDate, maxDate } = getStartEnd(el);
        expect(minDate).toBeDefined();
        expect(maxDate).toBeDefined();
    });
    it("It should give undefined when init is called", async () => {
        // TODO test if the function are called!
        expect(init()).toBe(undefined);
    });
});

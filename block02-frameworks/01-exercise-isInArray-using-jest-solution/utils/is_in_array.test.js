const { isInArray } = require("./is_in_array");

describe("isInArray", () => {
  test("isInArray([1, 2, 3], 1) should return true", () => {
    expect(isInArray([1, 2, 3], 1)).toBe(true);
  });

  test("isInArray([1, 2, 3], 4) should return false", () => {
    expect(isInArray([1, 2, 3], 4)).toBe(false);
  });

  test(`isInArray(["12", "Jan", "hello"], "hello") should return true`, () => {
    expect(isInArray(["12", "Jan", "hello"], "hello")).toBe(true);
  });
})
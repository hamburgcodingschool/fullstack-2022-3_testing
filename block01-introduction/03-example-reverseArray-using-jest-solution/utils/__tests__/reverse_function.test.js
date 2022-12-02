const { reverse } = require("../reverse_function");

test("my first test", () => {
  const actual = 9;
  const expected = 9;

  expect(actual).toBe(expected);
});

describe("reverse", () => {
  test("reverse([1, 2, 3, 4, 5]) should return [5, 4, 3, 2, 1]", () => {
    expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  test("reverse([1, 2, 3, 4, 5]) should not return [1, 2, 3, 4, 5]", () => {
    expect(reverse([1, 2, 3, 4, 5])).not.toEqual([1, 2, 3, 4, 5]);
  });
})
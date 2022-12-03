const { reverse } = require("../reverse_function");

describe("reverse", () => {
  test("reverse actually reverses an array", () => {
    expect(reverse([5,4,3,2,1])).toEqual([1,2,3,4,5]);
  });
  test("reverse should NOT return the same result as given", () => {
    expect(reverse([5,4,3,2,1])).not.toEqual([5,4,3,2,1]);
  });
})
const { isInArray } = require('./is_in_array');

describe("isInArray", () => {
  const someObject = {
    test: "value"
  };
  const someOtherObject = {
    test: "value"
  };
  
  test("if it returns true when the value is actually present in the array", () => {
    expect(isInArray([1,2,3], 1)).toBeTruthy();
  });
  
  test("if it returns false when the value is not present in the array", () => {
    expect(isInArray([1,2,3], 4)).toBeFalsy();
  });
  
  test("if it works with different value-types", () => {
    expect(isInArray(["12", 1, someObject], someObject)).toBeTruthy();
  });

  test("if we understand how by-value or by-reference work", () => {
    expect(isInArray(["12", 1, someObject], someOtherObject)).toBeFalsy();
  });
})
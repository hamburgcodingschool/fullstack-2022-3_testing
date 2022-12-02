const { isInArray } = require("./utils/is_in_array")

function expect_to_be_equal(actual, expected) {
  if (actual !== expected) {
    console.log(`Expected ${expected}, but got ${actual}`);
  } else {
    console.log("Test passed!");
  }
}

expect_to_be_equal(isInArray([1, 2, 3], 1), true);
expect_to_be_equal(isInArray([1, 2, 3], 4), false);
expect_to_be_equal(isInArray(["12", "Jan", "hello"], "hello"), true);
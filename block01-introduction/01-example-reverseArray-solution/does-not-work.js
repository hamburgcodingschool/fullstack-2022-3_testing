const { reverse } = require("./utils/reverse_function");

const input = [1, 2, 3, 4, 5];

function expect_to_be_equal(actual, expected) {
  if (actual !== expected) {
    console.log(`Expected ${expected}, but got ${actual}`);
  } else {
    console.log("Test passed!");
  }
}
-
expect_to_be_equal(reverse(input), input);

console.log(typeof(input)); //"Object"
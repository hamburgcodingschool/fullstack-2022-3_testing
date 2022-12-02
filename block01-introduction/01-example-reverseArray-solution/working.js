const { reverse } = require("./utils/reverse_function");

function expect_to_be_equal(actual, expected) {
  if (!compareArrays(actual, expected)) {
    console.log(`Expected ${expected}, but got ${actual}`);
  } else {
    console.log("Test passed!");
  }
}

function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

expect_to_be_equal(reverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
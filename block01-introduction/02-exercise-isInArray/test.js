const { isInArray } = require('./utils/is_in_array');

function expectToBeEqual(actual, expected) {
  if(actual !== expected) {
    console.log(`Expected ${expected}, but got ${actual}`);
  } else {
    console.log("Test passed!");
  }
}

expectToBeEqual(isInArray([1,2,3], 1), true);
expectToBeEqual(isInArray([1,2,3], 4), false);
expectToBeEqual(isInArray(["12", "Jan", "hello"], "hello"), true);
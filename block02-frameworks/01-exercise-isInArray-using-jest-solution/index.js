const { isInArray } = require("./utils/is_in_array")

console.log(isInArray([1, 2, 3], 1)); // => true
console.log(isInArray([1, 2, 3], 4)); // => false
console.log(isInArray(["12", "Jan", "hello"], "hello")); // => true
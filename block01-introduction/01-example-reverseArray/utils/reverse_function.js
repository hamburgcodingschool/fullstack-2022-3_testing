// E1: Go back to the code to reverse an array. Put that into a function so that the rest of the code looks like this:

function reverse(myArray) {
  let output = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    output[i] = myArray[myArray.length - 1 - i];
  }
  return output;
}

module.exports = { reverse };
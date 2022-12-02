function reverse(myArray) {
  let output = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    output[i] = myArray[myArray.length - 1 - i];
  }
  return output;
}

module.exports = {
  reverse
}
// E2: implement the following function

function isInArray(array, value) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === value) {
      return true;
    }
  }
  return false;
  // returns false if value is not in the array
  // returns true if value is in the array
}

module.exports = {
  isInArray
};
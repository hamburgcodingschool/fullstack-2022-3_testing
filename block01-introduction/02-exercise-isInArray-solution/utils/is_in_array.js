function isInArray(array, value) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === value) {
      return true;
    }
  }
  return false;
}

module.exports = {
  isInArray
}
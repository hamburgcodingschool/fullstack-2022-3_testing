// E1: Go back to the code to reverse an array. Put that into a function so that the rest of the code looks like this:

function reverse(myArray) {
  let output = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    output[i] = myArray[myArray.length - 1 - i];
  }
  return output;
}

let countUp = [1, 2, 3, 4, 5];
console.log(countUp);
let countDown = reverse(countUp);
console.log(countDown);
const { isInString, replaceInBoard, checkIfSolved, checkIfDead, askForGuess } = require("./utils/hangman");

let words = [
  "monkey",
  "concatenate",
  "Lemonade",
  "Screw",
  "Airbus",
  "Andi",
  "brilliant",
  "Donut",
  "Boolean",
  "Array",
  "Arrest",
  "Celine",
  "Rene",
  "Stefan",
  "Agustina",
  "Ringo",
  "Jan",
];

let word = words[Math.round(Math.random() * words.length)];
let solved = false;
let dead = false;
let misses = [];
let board = [];
for (let i = 0; i < word.length; i++) {
  board[i] = "_";
}
console.log(word);
console.log(board.join(" "));

while (!solved && !dead) {
  let guess = askForGuess();
  if (isInString(word, guess)) {
    board = replaceInBoard(board, word, guess);
  } else {
    misses.push(guess);
  }
  solved = checkIfSolved(board);
  dead = checkIfDead(misses);
  console.log("Misses so far:", misses);
  console.log(board.join(" "));
}

if (solved) {
  console.log("ftw");
} else {
  console.log("U dieded");
}
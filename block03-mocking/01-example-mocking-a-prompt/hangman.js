let prompt = require("prompt-sync")();

function isInString(str, ch) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === ch.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function replaceInBoard(board, word, guess) {
  // word = 'monkey'
  // guess = 'm'
  // board = ['_', '_', '_', '_', '_', '_']
  // board = ['m', '_', '_', '_', '_', '_']

  for (let i = 0; i < word.length; i++) {
    const element = word[i];
    if (element.toLowerCase() === guess.toLowerCase()) {
      board[i] = element;
    }
  }
  return board;
}

function checkIfSolved(board) {
  for (let i = 0; i < board.length; i++) {
    const element = board[i];
    if (element === "_") {
      return false;
    }
  }
  return true; // [...]
}

function checkIfDead(misses) {
  return misses.length > 6;
}

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
console.log(board.join(" "));

while (!solved && !dead) {
  let guess = prompt("What is your guessed character? ");
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
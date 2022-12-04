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

function askForGuess() {
  const readlineSync = require("readline-sync");

  return readlineSync.question("What is your guessed character? ");
}
module.exports = {
  isInString,
  replaceInBoard,
  checkIfSolved,
  checkIfDead,
  askForGuess
};
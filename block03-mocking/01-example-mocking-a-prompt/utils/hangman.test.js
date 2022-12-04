const { askForGuess } = require('./hangman');
const readlineSync = require('readline-sync');

jest.mock("readline-sync");

describe("askForGuess", () => {
  beforeEach(() => {
    readlineSync.question.mockImplementation(() => "a")
  });

  afterEach(() => {
    readlineSync.question.mockReset();
  });

  it("should ask the user for a guess and return a string", () => {
    const result = askForGuess();
    expect(typeof result).toBe("string");
    expect(result).toEqual("a");

    expect(readlineSync.question.mock.calls.length).toBe(1);
    expect(readlineSync.question.mock.calls[0].length).toBe(1);
    expect(readlineSync.question.mock.calls[0][0]).toEqual("What is your guessed character? ");
  });
})
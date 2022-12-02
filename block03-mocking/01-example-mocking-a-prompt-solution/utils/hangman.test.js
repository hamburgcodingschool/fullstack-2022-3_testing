const { askForGuess } = require("./hangman");
const readlineSync = require('readline-sync');

jest.mock('readline-sync');

describe("askForGuess", () => {
  beforeEach(() => {
    readlineSync.question.mockImplementation(() => "a");
  });

  afterEach(() => {
    readlineSync.question.mockReset();
  });

  it("should return a string", () => {
    const result = askForGuess();
    expect(typeof result).toBe("string");
    expect(result).toEqual("a");
  });
})
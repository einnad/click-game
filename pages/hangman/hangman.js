// elements
const startButton = document.querySelector(".start-game");
const guessButton = document.querySelector(".guess-button");

const guessDiv = document.querySelector(".word-guess");
const userInput = document.querySelector(".user-input");

// variables
const wordBank = [
  "canary",
  "sunshine",
  "moonlight",
  "beach",
  "excellence",
  "random",
  "reality",
  "caramel",
];
const wordsLength = wordBank.length;
let guessDisplay;
let chosenWord;
let rand;
let userGuess;

// events
startButton.addEventListener("click", () => {
  rand = Math.floor(Math.random() * wordsLength);
  chosenWord = wordBank[rand];
  console.log(chosenWord);
  guessDisplay = new Array(chosenWord.length).fill("_");
  guessDiv.textContent = guessDisplay;
});

guessButton.addEventListener("click", () => {
  userGuess = userInput.value;
  checkUserChoice(userGuess);
});

// functions
function checkUserChoice(userGuess) {
  if (chosenWord.includes(userGuess)) {
    console.log("Guess correct");
  }
}
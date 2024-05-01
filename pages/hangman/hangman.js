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
let guessBank = "";

// events
startButton.addEventListener("click", () => {
  userInput.value = "";
  rand = Math.floor(Math.random() * wordsLength);
  chosenWord = wordBank[rand];
  console.log(chosenWord);
  guessDisplay = new Array(chosenWord.length).fill("_");
  guessDiv.textContent = guessDisplay;
});

guessButton.addEventListener("click", () => {
  userGuess = userInput.value;
  userInput.value = "";
  checkUserChoice(userGuess);
});

// functions
function checkUserChoice(userGuess) {
  if (chosenWord.includes(userGuess)) {
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] == userGuess) {
        guessDisplay[i] = userGuess;
      }
    }
    guessDiv.textContent = guessDisplay;
    guessBank += userGuess;
  }
}

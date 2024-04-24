// elements
const chancesTag = document.querySelector(".chances");
const userGuess = document.querySelector(".guess-input");
const guessContainer = document.querySelector(".guess-container");
const guessButton = document.querySelector(".guess-button");
const resetButton = document.querySelector(".reset-button");

// variables
let guess;
let clicks = 0;
let computerNumber = Math.floor(Math.random() * 100) + 1;

// event listeners
guessButton.addEventListener("click", function () {
  guess = +userGuess.value;
  clicks++;
  console.log(guess);
  console.log(computerNumber);
  switch (true) {
    case guess === computerNumber:
      chancesTag.textContent = "Correct!";
      break;
    case guess < computerNumber:
      chancesTag.textContent = "Too low! Keep guessing!";
      break;
    case guess > computerNumber:
      chancesTag.textContent = "Too high! Keep guessing!";
      break;
    default:
      chancesTag.textContent = "Enter a valid number guess";
  }

  if (clicks === 4) {
    guessContainer.classList.add("shake");
  }
});

resetButton.addEventListener("click", () => resetGame());

// functions
function resetGame() {
  computerNumber = Math.floor(Math.random() * 100) + 1;
}

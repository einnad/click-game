// elements
const levelName = document.querySelector(".level-name");
const clickItems = document.querySelectorAll(".click-box");
const resetButton = document.querySelector(".reset");

// variables
let level = 0;

// functions
function updateLevel() {
  levelName.textContent = `Level ${level}`;
}

function checkSquare() {}

function setTreasure() {
  let randomNumber = generateNumber();
  console.log(randomNumber);
  clickItems.forEach((i) => {
    i.classList.add("hidden");
    i.classList.remove("treasure");
    i.textContent = "X";
  });
  clickItems[randomNumber].textContent = "T";
  clickItems[randomNumber].classList.add("treasure");
}

function reset() {
  clickItems.forEach((i) => i.classList.add("hidden"));
  setTreasure();
}

function generateNumber() {
  return Math.floor(Math.random() * 9);
}

// event listeners
clickItems.forEach((i) => {
  i.addEventListener("click", () => {
    if (i.classList.contains("treasure")) {
      i.classList.remove("hidden");
    }
  });
});

resetButton.addEventListener("click", () => {
  reset();
});

setTreasure();

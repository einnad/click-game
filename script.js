// elements
const levelName = document.querySelector(".level-name");
const clickItems = document.querySelectorAll(".click-box");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");

// variables
let level = 0;
levelName.textContent = `Level ${level}`;

// event listeners
startButton.addEventListener("click", function () {
  setTreasure();
  clickItems.forEach((i) => {
    i.addEventListener("click", () => {
      if (i.classList.contains("treasure")) {
        i.classList.remove("hidden");
        level++;
        levelName.textContent = `Level ${level}`;
        setTimeout(() => {
          setTreasure();
        }, 2000);
      }
    });
  });
});

resetButton.addEventListener("click", () => {
  reset();
});

// functions
function updateLevel() {
  levelName.textContent = `Level ${level}`;
}

function setTreasure() {
  let randomNumber = generateNumber(); // gens new num each time called for each 'round'/reset
  console.log(randomNumber);
  clickItems.forEach((i) => {
    i.classList.add("hidden");
    i.classList.remove("treasure"); // each square is hidden, remove treasure class from prev round
    i.textContent = "X";
  });
  clickItems[randomNumber].textContent = "T"; // selected square changes to treasure square
  clickItems[randomNumber].classList.add("treasure");
}

function reset() {
  setTreasure();
}

function generateNumber() {
  return Math.floor(Math.random() * 9);
}

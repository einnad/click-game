// elements
const levelName = document.querySelector(".level-name");
const levelCaption = document.querySelector(".level-caption");
const clickItems = document.querySelectorAll(".click-box");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");

// variables
let level = 0;
let click = 0;
levelName.textContent = `Level ${level}`;

// event listeners
startButton.addEventListener("click", function () {
  checkLevel();
  setTreasure();
  clickItems.forEach((i) => {
    i.addEventListener("click", () => {
      if (i.classList.contains("treasure")) {
        i.classList.remove("hidden");
        level++;
        checkLevel();
        levelName.textContent = `Level ${level}`;
        click = 0;
        setTimeout(() => {
          setTreasure();
        }, 2000);
      } else {
        click++;
        if (click > 5) {
          click = 0;
          level = 0;
          levelName.textContent = `Level ${level}`;
        }
      }
    });
  });
});

resetButton.addEventListener("click", () => {
  level = 0;
  levelName.textContent = `Level ${level}`;
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

function generateNumber() {
  return Math.floor(Math.random() * 9);
}

function checkLevel() {
  switch (level) {
    case 3:
      levelCaption.textContent = "Lucky 3 reached!";
      break;
    case 5:
      levelCaption.textContent = "Lucky 5 reached!";
      break;
    case 7:
      levelCaption.textContent = "Lucky 7 reached!";
      break;
    default:
      levelCaption.textContent = "Keep clicking!";

      break;
  }
}

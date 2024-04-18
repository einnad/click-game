// elements
const levelName = document.querySelector(".level-name");
const clickItems = document.querySelectorAll(".click-box");

// variables
let level = 0;

// functions
function updateLevel() {
  levelName.textContent = `Level ${level}`;
}

function checkSquare() {}

function setTreasure() {
  const randomNumber = Math.floor(Math.random() * 9);
  console.log(randomNumber);
  clickItems.forEach((i) => i.classList.add("hidden"));
  clickItems[randomNumber].textContent = "T";
  clickItems[randomNumber].classList.add("treasure");
}

// event listeners
clickItems.forEach((i) => {
  i.addEventListener("click", () => {
    if (i.classList.contains("treasure")) {
      i.classList.remove("hidden");
    }
  });
});

setTreasure();

// add hidden class to all
// gen random number and change that square to T
// when user clicks on T, remove hidden class on T

const wires = document.querySelectorAll(".wire");
const heading = document.querySelector("h1");

const options = ["red", "blue", "green", "yellow", "pink"];

// variable to control when game is complete to reset options
// timer?
let dangerOption;
let safeOption;

window.addEventListener("load", function () {
  let rand = Math.floor(Math.random() * options.length);
  dangerOption = options[rand];
  options.splice(rand, 1);
  rand = Math.floor(Math.random() * options.length);
  safeOption = options[rand];

  console.log(dangerOption, safeOption);
});

wires.forEach((wire) => {
  wire.addEventListener("click", function () {
    if (wire.classList.contains(dangerOption)) {
      heading.textContent = "BANG! Wrong wire, game over.";
    } else if (wire.classList.contains(safeOption)) {
      heading.textContent = "Mission accomplished. Well done.";
    } else {
      heading.textContent = "Still in danger, keep trying.";
    }
  });
});

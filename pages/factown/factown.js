const factButton = document.querySelector(".fact-button");
const factBox = document.querySelector(".fact-box");
const resBox = document.querySelector(".res-box");
const stateButtons = document.querySelectorAll(".state-button");

const facts = [
  { fact: "The skin is the largest organ of the human body", state: true },
  {
    fact: "The name for a sloth in French is 'parasseux/se' which translates also as 'lazy'",
    state: true,
  },
  { fact: "The largest passenger aircraft is the Airbus A380", state: true },
  { fact: "The French word for green is 'jaune'", state: false },
  { fact: "Java is the most popular programming language", state: false },
];

let fact;

factButton.addEventListener("click", function () {
  resBox.textContent = "";
  rand = Math.floor(Math.random() * facts.length);
  fact = facts[rand];
  factBox.textContent = fact.fact;
  return fact;
});

stateButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (
      (button.classList.contains("true-button") && fact.state == true) ||
      (button.classList.contains("false-button") && fact.state == false)
    ) {
      resBox.textContent = "Correct!";
    } else {
      resBox.textContent = "Incorrect.";
    }
  });
});

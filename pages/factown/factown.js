const factButton = document.querySelector(".fact-button");
const factBox = document.querySelector(".fact-box");

const facts = [
  "The skin is the largest organ of the human body",
  "The name for a sloth in French is 'parasseux/se' which translates also as 'lazy'",
  "The largest passenger aircraft is the Airbus A380",
];

factButton.addEventListener("click", function () {
  rand = Math.floor(Math.random() * facts.length);
  factBox.textContent = facts[rand];
});

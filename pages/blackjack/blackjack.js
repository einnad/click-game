const playerHand = document.querySelector(".player-hand");
const compHand = document.querySelector(".comp-hand");

const dealButton = document.querySelector(".deal-button");
const hitButton = document.querySelector(".hit-button");
const standButton = document.querySelector(".stand-button");

cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]; // j, q, k all 10, ace 11 or 1
playerCards = [];
compCards = [];

function selectCard() {
  return cards[Math.floor(Math.random() * 12)];
}

dealButton.addEventListener("click", function () {
  playerCards.push(selectCard());
  playerCards.push(selectCard());

  compCards.push(selectCard());
  compCards.push(selectCard());

  console.log(playerCards);
  console.log(compCards);

  playerHand.textContent = playerCards;
  compHand.textContent = compCards[0];
});

hitButton.addEventListener("click", function () {
  playerCards.push(selectCard());
  //   check card for ace
  //   check total for blackjack
  //   check for bust
});

const playerHand = document.querySelector(".player-hand");
const compHand = document.querySelector(".comp-hand");

const dealButton = document.querySelector(".deal-button");
const hitButton = document.querySelector(".hit-button");
const standButton = document.querySelector(".stand-button");

const comment = document.querySelector(".comment-div");

cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]; // j, q, k all 10, ace 11 or 1
playerCards = [];
compCards = [];

function selectCard() {
  return cards[Math.floor(Math.random() * 12)];
}

function checkHand(hand) {
  sum = 0;
  hand.forEach((card) => {
    sum += card;
  });
  return sum;
}

dealButton.addEventListener("click", function () {
  playerCards = [];
  compCards = [];

  playerHand.textContent = playerCards;
  compHand.textContent = compCards;
  comment.textContent = "Game in progress...";

  playerCards.push(selectCard());
  playerCards.push(selectCard());

  compCards.push(selectCard());
  compCards.push(selectCard());

  if (checkHand(playerCards) == 21) {
    comment.textContent = "Blackjack!";
  }

  if (checkHand(compCards) < 17) {
    compCards.push(selectCard());
  }

  console.log(playerCards);
  console.log(compCards);

  playerHand.textContent = playerCards;
  compHand.textContent = compCards[0];
});

hitButton.addEventListener("click", function () {
  playerCards.push(selectCard());
  let playerTotal = checkHand(playerCards);

  //  check card for ace
  if (playerCards[2] == 11 && playerTotal > 21) {
    // check 21 diff
    print("Card change to 1");
    playerTotal -= 11;
    playerCards[2] = 1;
  }

  if (playerTotal > 21) {
    comment.textContent = "Bust!";
  } else if (playerTotal == 21) {
    comment.textContent = "Blackjack!";
  }

  playerHand.textContent = playerCards;
});

standButton.addEventListener("click", function () {
  //  check player vs comp cards
  let playerTotal = checkHand(playerCards);

  let choice = Math.floor(Math.random() * 2); // 0 hit 1 stand
  if (choice === 0) {
    compCards.push(selectCard());
  }
  let compTotal = checkHand(compCards);

  //  if no bust or blackjack, highest wins
  if (playerTotal > 21) {
    comment.textContent = "Bust!";
  } else if (compTotal > 21 || playerTotal > compTotal) {
    comment.textContent = "You win";
  } else {
    comment.textContent = "You lose";
  }
  playerHand.textContent = playerCards;
  compHand.textContent = compCards;
});

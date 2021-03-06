var rightSide = document.querySelector('.right-side');
var leftSide = document.querySelector('.left-side');
var winnerPage = document.querySelector('.winner-page');
var counter = document.querySelector('.match-count');
var timer = setInterval(countUp, 1000, time);
var deck = new Deck();
var time = 0;
var imageNum = 0;
var bestTimes = [];

rightSide.addEventListener('click', chooseCard);
winnerPage.addEventListener('click', restartGame);

window.onload = invokeDeck();

function invokeDeck() {
  deck.createDeck();
  addCardsToDOM();
  countUp(time);
}

function addCardsToDOM() {
  for (var i = 0; i < deck.cards.length; i++) {
    rightSide.insertAdjacentHTML('beforeend',
    `<div class=${deck.cards[i].style}>
    <img class=${deck.cards[i].style}
    id="card"src= assets/Wu-Tang-Clan-logo.jpg>
    </div>`)
  }
}

function countUp(a) {
  var winnerTime = document.querySelector('.congrats3');
    if (time < 60) {
      winnerTime.innerText = `${time++} seconds`;
  } else if (time >= 60 ) {
  var minute = Math.floor(time / 60);
  var seconds = time % 60;
    winnerTime.innerText = `${minute} minutes ${seconds} seconds`;
    time++;
  }
    if (deck.displayMatchedCards === 5) {
      clearInterval(timer);
      bestTimes.push(time);
  }
}

function moveToMatchedLeft() {
  if (deck.matched.length > 0) {
    imageNum += 1;
    var matchedImageSection = document.querySelector(`#image${imageNum}`)
    var savedMatch = null;
      savedMatch = deck.matched[0].matchedInfo;
      matchedImageSection.insertAdjacentHTML('beforeend',
      `<img class = 'small-image' src = ${savedMatch}>`);
  }
}

function chooseCard() {
  deck.gameStarted = true;
  for(var i = 0; i < deck.cards.length; i++) {
    if (event.target.classList.contains(deck.cards[i].style)) {
      event.target.src = deck.cards[i].matchedInfo;
      checkSelected(deck.cards[i], event.target);
    }
  }
  moveToMatchedLeft();
  removeFromDOM();
}

function removeFromArray(card) {
  if (!card.selected) {
    deck.selectedCards.splice(deck.selectedCards.indexOf(card));
  }
}

function moveSelectedCards (event) {
if (deck.selectedCards.length > 1) {
  var removedCard = deck.selectedCards.shift()
  var removedCardHtml = document.querySelector(`.${removedCard.style} #card`)
    removedCard.selected = false
    removedCardHtml.src = 'assets/Wu-Tang-Clan-logo.jpg'
  }
}

function checkSelected(card, event) {
  if (!card.selected) {
    moveSelectedCards(event);
    event.src = card.matchedInfo;
    card.selected = true
    deck.selectedCards.push(card);
    deck.moveToMatched();
  } else {
      event.src = 'assets/Wu-Tang-Clan-logo.jpg'
      validateCardStyle(card);
  }
}

  function validateCardStyle (card) {
    for (var i = 0; i < deck.selectedCards.length; i++) {
      if (deck.selectedCards[i].style === card.style) {
        deck.selectedCards.splice(i, 1)
        card.selected = false;
    }
  }
}

function removeFromDOM() {
  for (var i = 0; i < deck.matched.length; i++) {
    var cardStyle = document.querySelector(`.${deck.matched[i].style}`);
      cardStyle.remove();
    }
    matchCounter();
    deck.matched = [];
}

function checkMatched() {
  deck.moveToMatched();
}

function matchCounter() {
  if (deck.matched.length > 1) {
    deck.displayMatchedCards++;
    counter.innerText = deck.displayMatchedCards;
    displayWinnerPage();
  }
}

function displayWinnerPage() {
  if(deck.displayMatchedCards === 5) {
    rightSide.style.display = 'none';
    leftSide.style.display = 'none';
    winnerPage.style.display = ('inline');
    counter.innerText = 0;
  } else {

    return;
  }
}

function restartGame() {
  if (event.target.name === 'play-again' || event.target.name === 'new-game') {
    deck.cards = [];
    deck.displayMatchedCards = 0;
    deck.gameStarted = false;
    rightSide.style.display = 'flex';
    leftSide.style.display = 'inline';
    winnerPage.style.display = ('none');
    location.reload(false);
  }
}

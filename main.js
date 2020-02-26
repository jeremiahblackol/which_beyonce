var rightSide = document.querySelector('.right-side');
var leftSide = document.querySelector('.left-side');
var winnerPage = document.querySelector('.winner-page');
var counter = document.querySelector('.match-count');
var deck = new Deck()
var bestTimes = [];
var time = 0;
var imageNum = 0;


rightSide.addEventListener('click', chooseCard);
winnerPage.addEventListener('click', restartGame)

window.onload = invokeDeck();

function invokeDeck() {
  deck.createDeck();
  addCardsToDOM();
  countUp(time);
}

function addCardsToDOM(){
for (var i = 0; i < deck.cards.length; i++){
  rightSide.insertAdjacentHTML('beforeend',
  `<div class=${deck.cards[i].style}>
  <img class=${deck.cards[i].style}
  id="card"src= assets/Wu-Tang-Clan-logo.jpg>
  </div>`)
  }
}

var timer = setInterval(countUp, 1000, time);

function countUp(a) {
  var winnerTime = document.querySelector('.congrats3');
  if(time < 60) {
  winnerTime.innerText = `${time++} seconds`;
} else if (time >= 60 ){
  var minute = Math.floor(time / 60);
  var seconds = time % 60;
  winnerTime.innerText = `${minute} minutes ${seconds} seconds`;
  time++;
    }
    if (deck.displayMatchedCards === 5) {
      clearInterval(timer);

      // bestTimes.push(time - 1);
  }
}

function moveToMatchedLeft() {
  if(deck.matched.length > 0){
    imageNum += 1;
    var matchedImageSection = document.querySelector(`#image${imageNum}`)
    var savedMatch = null;
    console.log(imageNum)
    savedMatch = deck.matched[0].matchedInfo;
  matchedImageSection.insertAdjacentHTML('beforeend',
`<img class = 'small-image' src = ${savedMatch}>`);
  }
}

function chooseCard() {
  deck.gameStarted = true;
  for(var i = 0; i < deck.cards.length; i++){
    if(event.target.classList.contains(deck.cards[i].style)) {
      event.target.src = deck.cards[i].matchedInfo;
      // cardFlip(deck.cards[i], event.target);
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
if (deck.selectedCards.length > 1){
  var removedCard = deck.selectedCards.shift()
  removedCard.selected = false
  var removedCardHtml = document.querySelector(`.${removedCard.style} #card`)
  removedCardHtml.src = 'assets/Wu-Tang-Clan-logo.jpg'
  }
}

function checkSelected(card, event){
    if (!card.selected){
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
    for (var i = 0; i < deck.selectedCards.length; i++){
    if (deck.selectedCards[i].style === card.style){
      deck.selectedCards.splice(i, 1)
      card.selected = false;
      }
    }
  }

function removeFromDOM () {
  for ( var i = 0; i < deck.matched.length; i++){
    var cardStyle = document.querySelector(`.${deck.matched[i].style}`);
      cardStyle.remove();
    }
    matchCounter();
    deck.matched = [];
}

function checkMatched(){
  deck.moveToMatched();
}

function matchCounter () {
  if (deck.matched.length > 1){
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

// function displayBestTimes () {
//   // bestTimes.sort(function(a, b)(return a-b));
// }



function restartGame() {
  if(event.target.name === 'play-again' || event.target.name === 'new-game') {
    deck.cards = [];
    deck.displayMatchedCards = 0;
    deck.gameStarted = false;
    invokeDeck();
    // resetMatchedImages();
    rightSide.style.display = 'flex';
    leftSide.style.display = 'inline';
    winnerPage.style.display = ('none');
  }
}
// Working on clearing the images from the left side of the page
function resetMatchedImages () {
var smallImages = document.querySelectorAll('.small-image')
  smallImages.classList.remove('small-image');
}

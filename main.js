var rightSide = document.querySelector('.right-side');
var leftSide = document.querySelector('.left-side');
var winnerPage = document.querySelector('.winner-page');
var deck = new Deck()


rightSide.addEventListener('click', chooseCard);
winnerPage.addEventListener('click', restartGame)

window.onload = invokeDeck();

function invokeDeck() {
  deck.createDeck();
  addStyle();
  addCardsToDOM();
}

function addStyle(){
 var styles = [
   'image-slant1',
   'image-slant2',
   'image-slant3',
   'image-slant4',
   'image-slant5',
   'image-slant6',
   'image-slant7',
   'image-slant8',
   'image-slant9',
   'image-slant10'
 ];
 for(var i = 0; i < styles.length; i++){
   deck.cards[i].style = styles[i];
 }
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


function chooseCard() {
  for(var i = 0; i < deck.cards.length; i++){
    if(event.target.classList.contains(deck.cards[i].style)) {
      event.target.src = deck.cards[i].matchedInfo;
      // cardFlip(deck.cards[i], event.target);
      checkSelected(deck.cards[i], event.target);
    }
  }
  removeFromDOM();
}

function removeFromArray(card) {
  if (!card.selected) {
    deck.selectedCards.splice(deck.selectedCards.indexOf(card));
  }
}

function checkSelected(card, event){
    if (!card.selected){
      if (deck.selectedCards.length > 1){
        var removedCard = deck.selectedCards.shift()
        removedCard.selected = false
        var removedCardHtml = document.querySelector(`.${removedCard.style} #card`)
        removedCardHtml.src = 'assets/Wu-Tang-Clan-logo.jpg'
      }
      event.src = card.matchedInfo;
      card.selected = true
      deck.selectedCards.push(card);
      deck.moveToMatched()
    } else {
      event.src = 'assets/Wu-Tang-Clan-logo.jpg'
      for (var i = 0; i < deck.selectedCards.length; i++){
        if (deck.selectedCards[i].style === card.style){
          deck.selectedCards.splice(i, 1)
          card.selected = false;
        }
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
  var counter = document.querySelector('.match-count');
  if (deck.matched.length > 1){
    deck.displayMatchedCards++;
  counter.innerText = deck.displayMatchedCards;
  console.log(deck.displayMatchedCards);
  displayWinnerPage();
  }
}

function displayWinnerPage() {
  if(deck.displayMatchedCards === 5) {
    rightSide.style.display = 'none';
    leftSide.style.display = 'none';
    winnerPage.style.display = ('inline');
  } else {
    return;
  }
}

function restartGame() {
  if(event.target.name === 'play-again' || event.target.name === 'new-game') {
    console.log(event.target);
  } else {
    console.log('nope!');
  }
}

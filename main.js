var rightSide = document.querySelector('.right-side');
var winnerPage = document.querySelector('.winner-page')
var deck = new Deck()


rightSide.addEventListener('click', chooseCard);
winnerPage.addEventListener('click', restartGame)

window.onload = invokeDeck();

function invokeDeck() {
  deck.createDeck();
  addStyle();
  console.log(deck.cards);
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
  console.log(deck.cards[i]);
  rightSide.insertAdjacentHTML('beforeend',
  `<div class=${deck.cards[i].style}>
  <img class=${deck.cards[i].style}
  id="card"src= assets/Wu-Tang-Clan-logo.jpg>
  </div>`)
  }
}


function chooseCard() {
  for(var i = 0; i < deck.cards.length; i++){
    if(event.target.classList.contains(deck.cards[i].style) && deck.selectedCards.length < 2) {
      event.target.src = deck.cards[i].matchedInfo;
      deck.checkSelected(deck.cards[i]);
      // removeCardFromSelected(event);
      }
      if(event.target.classList.contains(deck.cards[i].style) && deck.selectedCards.length === 2){
          deck.removeSelected();
          event.target.src = 'assets/Wu-Tang-Clan-logo.jpg';
    }
  }
}

// function removeCardFromSelected(event){
//   // for(var i = 0; i < deck.cards.length; i++){
//   // if(event.target.classList.contains(deck.cards[i].style)
//   //   && event.target.src ===  deck.cards[i].matchedInfo) {
//   //   event.target.src = 'assets/Wu-Tang-Clan-logo.jpg';
//     deck.removeSelected();
//     // }
//   // }
// }

// function checkMatched(){
//   deck.moveToMatched();
// }




function restartGame() {
  if(event.target.name === 'play-again' || event.target.name === 'new-game') {
    console.log(event.target);
  } else {
    console.log('nope!');
  }
}

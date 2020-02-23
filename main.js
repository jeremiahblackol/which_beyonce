var rightSide = document.querySelector('.right-side');
var winnerPage = document.querySelector('.winner-page')
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
      deck.checkSelected(deck.cards[i], event.target);
    }
  }
}


function removeFromArray(card) {
  if (!card.selected) {
    deck.selectedCards.splice(deck.selectedCards.indexOf(card));
  }
}


// I left these incase y'all don't like the new set up
// function chooseCard() {
//   for(var i = 0; i < deck.cards.length; i++){
//     console.log('poop');
//     if(event.target.classList.contains(deck.cards[i].style) && deck.selectedCards.length === 2) {
//       event.target.src = 'assets/Wu-Tang-Clan-logo.jpg';
//       deck.removeSelected(event.target);
//       console.log(deck.selectedCards);
//     } else if (event.target.classList.contains(deck.cards[i].style)){
//       event.target.src = deck.cards[i].matchedInfo;
//       deck.checkSelected(deck.cards[i]);
//     } else {}
//   }
// }



// function removeCardFromSelected(event){
//   for(var i = 0; i < deck.cards.length; i++){
//   if(event.target.classList.contains(deck.cards[i].style) && event.target.src !==  deck.cards[i].matchedInfo) {
//     event.target.src = 'assets/Wu-Tang-Clan-logo.jpg';
//      deck.removeSelected();
//    } else {
//      deck.matched.push(deck.selectedCards[0]);
//      deck.matched.push(deck.selectedCards[1]);
//    }
//    }
// }


function checkMatched(){
  deck.moveToMatched();
}




function restartGame() {
  if(event.target.name === 'play-again' || event.target.name === 'new-game') {
    console.log(event.target);
  } else {
    console.log('nope!');
  }
}

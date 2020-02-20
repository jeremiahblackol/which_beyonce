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
  `<div class=${deck.cards[i].style}><img id="card" src=${deck.cards[i].matchedInfo}>
  </div>`)
}
}


function chooseCard() {
  if(event.target.id === 'card') {
    console.log('hello');
  }
}

function restartGame() {
  if(event.target.name === 'play-again' || event.target.name === 'new-game') {
    console.log(event.target);
  } else {
    console.log('nope!');
  }
}

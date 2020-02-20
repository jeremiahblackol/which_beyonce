var rightSide = document.querySelector('.right-side');
var winnerPage = document.querySelector('.winner-page')
var deck = new Deck()

rightSide.addEventListener('click', chooseCard);
winnerPage.addEventListener('click', restartGame)

window.onload = invokeDeck();

function invokeDeck() {
  deck.createDeck();
}


function chooseCard() {
  if(event.target.id === 'card') {
    console.log(event.target);
  }
}

function restartGame() {
  if(event.target.name === 'play-again' || event.target.name === 'new-game') {
    console.log(event.target);
  } else {
    console.log('nope!');
  }
}

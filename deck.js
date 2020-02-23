class Deck {
  constructor(){
    this.selectedCards = [];
    this.matched = [];
    this.cards = []
  }

shuffle(){

}

checkSelected(card) {
  // if(deck.selectedCards.length < 2)
  if(card.selected) {
    card.selected = false;
    this.removeFromArray(card)
  } else {
  card.selected = true;
  this.selectedCards.push(card);
  card.src = 'assets/Wu-Tang-Clan-logo.jpg';
  }
}


removeSelected(card){
  if(this.selectedCards[0].matchedInfo !== this.selectedCards[1].matchedInfo) {
    this.removeFromArray(card);
  }
}

removeFromArray(card) {
  if (!card.selected) {
    this.selectedCards.splice(this.selectedCards.indexOf(card));
  }
}

addCards(){

}

createDeck() {
  var images = [
    'assets/rza-.jpg',
    'assets/tumblr_kwq0plYMaS1qzcv0zo1_500.jpg',
    'assets/ghostface-killah.jpg',
    'assets/gza-the-lost-art-of-lyricism-op-ed-feat.jpg',
    'assets/dirty.png',
    'assets/rza-.jpg',
    'assets/tumblr_kwq0plYMaS1qzcv0zo1_500.jpg',
    'assets/ghostface-killah.jpg',
    'assets/gza-the-lost-art-of-lyricism-op-ed-feat.jpg',
    'assets/dirty.png'
    ];
for (var i = 0; i < images.length; i++) {
  var card = new Card(images[i]);
  this.cards.push(card);
  }
 }
}

class Deck {
  constructor(){
    this.selectedCards = [];
    this.matched = [];
    this.cards = []
  }

shuffle(){

}


checkSelected(card, event) {
if(card.selected) {
    card.selected = false;
    event.src = 'assets/Wu-Tang-Clan-logo.jpg';
    removeFromArray(card);
  } else {
  card.selected = true;
  this.selectedCards.push(card);
  this.numSelected(card, event);
  }
}


removeSelected(card){
  if(this.selectedCards[0].matchedInfo !== this.selectedCards[1].matchedInfo) {
    removeFromArray(card);
  } else {
    this.matched.push(card);
    removeFromArray(card);
  }
}

numSelected(card, event) {
  var numSelected = this.cards.filter(card => card.selected === true).length;
  if (numSelected > 2){
    event.src = 'assets/Wu-Tang-Clan-logo.jpg';
    card.selected = false;
  }
}
// I left these incase y'all don't like the new set up

// removeFromArray(card) {
//   if (!card.selected) {
//     this.selectedCards.splice(this.selectedCards.indexOf(card));
//   }
// }

// removeFromArray(card) {
//   if (!card.selected) {
//     this.cards.push(card);
//     this.selectedCards.splice(this.selectedCards.indexOf(card));
//   }
// }

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

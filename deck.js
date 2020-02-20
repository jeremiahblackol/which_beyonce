class Deck {
  constructor(){
    this.selectedCards = [];
    this.matched = [];
    this.cards = []
  }

shuffle(){
this.cards = shuffle(this.cards);
}

checkSelected(){

}

moveToMatched(){

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

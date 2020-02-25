class Deck {
  constructor(){
    this.selectedCards = [];
    this.matched = [];
    this.cards = [];
    this.displayMatchedCards = 0;
    this.gameStarted = false;
  }

shuffle(){

}

// checkSelected(card) {
//   var merge = this.matched.concat(this.selectedCards);
//   if (this.selectedCards.length === 2 && this.selectedCards[0].matchedInfo === this.selectedCards[1].matchedInfo ){
//     this.selectedCards[0].matched = true;
//     this.selectedCards[1].matched = true;
//     this.matched = merge;
//     this.selectedCards[0].selected = false;
//     this.selectedCards[1].selected = false;
//     // console.log(this.matched);
//     deck.selectedCards.splice(deck.selectedCards.indexOf(card));
//     // deck.selectedCards.splice(deck.selectedCards[1];
//
//     // console.log(this.selectedCards);
//
//   // console.log(this.selectedCards[0].matchedInfo);
//   // console.log(card.matchedInfo);
// } else {
//   console.log('no match');
//   }
// }




// checkSelected(card, event) {
// if(card.selected) {
//     card.selected = false;
//     event.src = 'assets/Wu-Tang-Clan-logo.jpg';
//     removeFromArray(card);
//   } else if (!card.selected && ) {
//   card.selected = true;
//   this.selectedCards.push(card);
//   this.numSelected(card, event);
//   }
// }


removeSelected(card){
  if(this.selectedCards[0].matchedInfo !== this.selectedCards[1].matchedInfo) {
    removeFromArray(card);
  } else {
    this.matched.push(card);
    removeFromArray(card);
  }
}

moveToMatched() {
  var merge = this.matched.concat(this.selectedCards);
    if (this.selectedCards.length === 2 && this.selectedCards[0].matchedInfo
       ===  this.selectedCards[1].matchedInfo){
        this.selectedCards[1].matched = true;
        this.selectedCards[0].matched = true;
        this.matched = merge;
        this.selectedCards = [];
        this.unselectMatched()
}
}

unselectMatched(){
  for (var i = 0; i < this.matched.length; i++){
    this.matched[i].selected = false
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
    var styles = [
      'image-slant0',
      'image-slant1',
      'image-slant2',
      'image-slant3',
      'image-slant4',
      'image-slant5',
      'image-slant6',
      'image-slant7',
      'image-slant8',
      'image-slant9',
    ];
    var shuffleStyles = this.shuffle(styles)
    for (var i = 0; i < images.length; i++) {
        var card = new Card(images[i], shuffleStyles[i]);
        this.cards.push(card);
    }
  }
  shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
  }
}

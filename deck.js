class Deck {
  constructor(){
    this.selectedCards = [];
    this.matched = [];
    this.cards = [];
    this.displayMatchedCards = 0;
    this.gameStarted = false;
  }

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

createDeck() {
    var images = [
      'rza', 'MethodMan','ghostface', 'gza', 'dirty', 'rza', 'MethodMan','ghostface', 'gza', 'dirty'
      ];
    var styles = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ];
    var shuffleStyles = this.shuffle(styles)
    for (var i = 0; i < styles.length; i++) {
        var card = new Card(`assets/${images[i]}.jpg`, `image-slant${shuffleStyles[i]}`);
        this.cards.push(card);
    }
  }

  shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
  }
}

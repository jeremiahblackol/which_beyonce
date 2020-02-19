class Deck {
  constructor(){
    this.selectedCards = []
    this.matched = []
    this.cards = []
  }
shuffle(){
// use this.cards to randomize ex:Math.floor(Math.random() * 5)
}
checkSelected(){
// if card.selected = true THEN push into the selectedCards array
}
moveToMatched(){
// IF card.matched is true THEN move the card into this.matched.push(card)
}
addCards(card){
  this.cards.push(card);
}
}

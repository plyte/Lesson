//

var cards = ['Ace', 'King', 'Queen', 'Jack', 10];
var fortune = ['Success', 'You have a big ass', 'You\'re Gay', 'Back alley', 'Your age'];
var randomNumbers = [];

console.log(pickACard());

function pickACard(){
  var random = Math.floor(Math.random() * cards.length);
  randomNumbers.push(random);

  return random + ' : ' + cards[random] + ' your fortune is ' + fortune[random];
}



console.log(pickACard());
console.log(pickACard());
console.log(pickACard());
console.log(pickACard());
console.log(pickACard());
console.log(pickACard());
console.log(pickACard());
console.log(pickACard());
console.log(pickACard());
console.log(pickACard());
console.log(pickACard());

console.log(randomNumbers);

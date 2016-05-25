bingoApp.factory('BingoCardFactory', function(){
  var Card = function(){
    const POSSIBLE_CARD_PERMUTATIONS = [
    [3,3,3,1,1,1,1,1,1],
    [3,3,2,2,1,1,1,1,1],
    [3,2,2,2,2,1,1,1,1],
    [2,2,2,2,2,2,1,1,1]
  ];
    this.freeSpaces = 15;
    this.entries = [];
    this.layout = shuffleArray(POSSIBLE_CARD_PERMUTATIONS[getRandomInt(0,4)]);
  };

  Card.prototype.generate = function() {
    this.entries.push(getRandomInt(1,10));
  };

  return Card;
});
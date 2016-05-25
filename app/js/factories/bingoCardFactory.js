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
    for(var i = 0; i < 9; i++) {
      var startRange = (i * 10) + 1;
      var endRange = startRange + 10;
      for(var j = 0; j < this.layout[i]; j++) {
        number = this._getNumber(startRange, endRange);
        this.entries.push(number);
        this.freeSpaces -= 1;
      };
    };
    return this.entries.sort(function(a, b){return a-b});
  };

  Card.prototype._getNumber = function(startRange, endRange) {
    number = getRandomInt(startRange, endRange);
    return this._checkNumber(number, startRange, endRange);
  };

  Card.prototype._checkNumber = function(number, startRange, endRange) {
    if (this.entries.includes(number) === false){
      return number
    }
    else {
      return this._getNumber(startRange, endRange);
    }
  };

  return Card;
});
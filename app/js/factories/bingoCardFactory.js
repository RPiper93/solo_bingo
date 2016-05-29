"use strict";

bingoApp.factory('BingoCardFactory', ['BingoPositionsFactory', 'BingoNumberFactory', function(BingoPositionsFactory, BingoNumberFactory){
  var Card = function(){
    const POSSIBLE_CARD_PERMUTATIONS = [
    [3,3,3,1,1,1,1,1,1],
    [3,3,2,2,1,1,1,1,1],
    [3,2,2,2,2,1,1,1,1],
    [2,2,2,2,2,2,1,1,1]
    ];
    this.positions = new BingoPositionsFactory;
    this.entries = [[], [], []];
    this.layout = shuffleArray(POSSIBLE_CARD_PERMUTATIONS[getRandomInt(0,4)]);
    this.numbers = [];
  };

  Card.prototype.generate = function() {
    var position
    this._sortNumbers();
    for (var i in this.layout) {
      position = this.positions.check(this.entries, this.layout[i]);
      this._addToColumn(i, position);
    };
    var result = this.entries;
    return result;
  };

  Card.prototype._addToColumn = function(index, position) {
    for (var j=0; j<3; j++) {
      if (this._oneNumber(j, index, position) || this._oneSpace(j, index, position)) {
        this._addToRow(j, " ");
      }
      else {
        var amount = this.numbers.shift();
        this._addToRow(j, new BingoNumberFactory(amount));
      };
    };
  };

  Card.prototype._oneSpace = function(row, index, position) {
    if (row === position && this.layout[index] === 2) {
      return true
    };
  };

  Card.prototype._oneNumber = function(row, index, position) {
    if (row !== position && this.layout[index] === 1) {
      return true
    };
  };

  Card.prototype._addToRow = function(row, value) {
    this.entries[row].push(value);
  };

  Card.prototype._sortNumbers = function() {
    for(var i = 0; i < 9; i++) {
      this._addNumber(i)
    };
    return this.numbers.sort(function(a, b){return a-b});
  };

  Card.prototype._addNumber = function(firstDigit) {
    for(var j = 0; j < this.layout[firstDigit]; j++) {
      var number = this._getNumber(this._startRange(firstDigit), this._endRange(firstDigit));
      this.numbers.push(number);
    };
  };

  Card.prototype._getNumber = function(startRange, endRange) {
    var number = getRandomInt(startRange, endRange);
    return this._checkNumber(number, startRange, endRange);
  };

  Card.prototype._checkNumber = function(number, startRange, endRange) {
    if (this.numbers.includes(number) === false){
      return number
    }
    else {
      return this._getNumber(startRange, endRange);
    }
  };

  Card.prototype._startRange = function(tens) {
    return ((tens * 10) + 1)
  };

  Card.prototype._endRange = function(tens) {
    return ((tens * 10) + 11)
  }

  return Card;
}]);
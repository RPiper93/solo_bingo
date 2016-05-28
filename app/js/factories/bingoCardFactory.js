"use strict";

bingoApp.factory('BingoCardFactory', function(){
  var Card = function(){
    const POSSIBLE_CARD_PERMUTATIONS = [
    [3,3,3,1,1,1,1,1,1],
    [3,3,2,2,1,1,1,1,1],
    [3,2,2,2,2,1,1,1,1],
    [2,2,2,2,2,2,1,1,1]
    ];
    this.entries = {0: [], 1: [], 2: []};
    this.layout = shuffleArray(POSSIBLE_CARD_PERMUTATIONS[getRandomInt(0,4)]);
    this.numbers = [];
  };

  Card.prototype.generate = function() {
    var position
    this._sortNumbers();
    for (var i in this.layout) {
      position = this._getPosition(this.entries);
      this._addToColumn(i, position);
    };
    console.log("\n" + this.entries[0] + "\n" + this.entries[1] + "\n" + this.entries[2])
    return this.entries
  };

  Card.prototype._getPosition = function(object){
    var position = getRandomInt(0,3);
    if (this._numSpacesFree(object)[position] === 4){
      return this._getPosition(object);
    }
    else {
      return position;
    };
  };

  Card.prototype._numSpacesFree = function(object){
    var freeSpaces = [];
    for (var i = 0; i < 3; i++) {
      freeSpaces.push(count(object[i], " "));
    };
    return freeSpaces;
  };

  Card.prototype._addToColumn = function(index, position) {
    for (var j=0; j<3; j++) {
      if (this._oneNumber(j, index, position) || this._oneSpace(j, index, position)) {
        this._addToCard(j, " ");
      }
      else {
        this._addToCard(j, this.numbers.shift());
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

  Card.prototype._addToCard = function(row, value) {
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
});
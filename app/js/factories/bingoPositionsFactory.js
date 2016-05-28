"use strict";

bingoApp.factory('BingoPositionsFactory', function(){
  var Position = function(){
    this.number = shuffleArray([0,1,2]);
  };

  Position.prototype.check = function(card, numbers){
    if (numbers === 1) {
      return this._checkOneNumber(card);
    }
    else if (numbers === 2) {
      return this._checkOneSpace(card);
    };
  };

  Position.prototype._checkOneNumber = function(card){
    if (this._checkOtherPositions(card)){
      this.number.shift();
      return this._checkOneNumber(card);
    }
    else {
      return this._value();
    };
  };

  Position.prototype._checkOneSpace = function(card){
    if (this._numSpacesFree(card)[this.number[0]] === 4) {
      this.number.shift();
      return this._checkOneSpace(card);
    }
    else {
      return this._value();
    };
  }

  Position.prototype._numSpacesFree = function(card){
    var freeSpaces = [];
    for (var row = 0; row < 3; row++) {
      freeSpaces.push(count(card[row], " "));
    };
    return freeSpaces;
  };

  Position.prototype._checkOtherPositions = function(card){
    var otherSpaces = this._numSpacesFree(card);
    var ownRow = otherSpaces.splice(this.number[0], 1);
    if ((count(otherSpaces, 4) === 1)) {
      return true;
    };
  };

  Position.prototype._value = function(){
    var result = this.number[0];
    this.number = shuffleArray([0,1,2]);
    return result;
  };

  Position.prototype._remainingColumns = function(row, value){
    return (4 - row === 9 - value);
  };

  Position.prototype._rowLength = function(card, row){
    return (card[row].length);
  };

  return Position;
});
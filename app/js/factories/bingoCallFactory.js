"use strict";

bingoApp.factory('BingoCallFactory', function(){
  var Call = function(){
    this.numbers = shuffleArray(arrayFrom(1,90));
    this.currentNumber = "";
  };

  Call.prototype.newNumber = function(){
    this.currentNumber = this.numbers.shift();
    return this.currentNumber;
  }

  return Call;
});
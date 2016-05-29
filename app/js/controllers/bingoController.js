'use strict';

bingoApp.controller('BingoCardController', ['BingoCardFactory', 'BingoPositionsFactory', 'BingoCallFactory', function(BingoCardFactory, BingoPositionsFactory, BingoCallFactory) {
  var self = this;
  var factory = new BingoCardFactory;
  var card = factory.generate();
  var call = new BingoCallFactory;

  self.newCall = function(){
    return call.newNumber();
  };

  self.cardRows = [card[0], card[1], card[2]];
}]);
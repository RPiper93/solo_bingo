'use strict';

bingoApp.controller('BingoController', ['BingoCardFactory', 'BingoPositionsFactory', function(BingoCardFactory, BingoPositionsFactory) {
  var self = this;
  var factory = new BingoCardFactory;
  var card = factory.generate();

  self.check = 'This Controller is Working'
  self.lines = [card[0], card[1], card[2]];
}]);
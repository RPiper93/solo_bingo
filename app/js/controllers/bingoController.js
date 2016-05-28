'use strict';

bingoApp.controller('BingoController', ['BingoCardFactory', 'BingoPositionsFactory', function(BingoCardFactory, BingoPositionsFactory) {
  var self = this;
  var factory = new BingoCardFactory;
  self.check = 'This Controller is Working'
  self.check_factory = function() {
    factory.generate();
    return factory.entries;
  };
}]);
'use strict';

bingoApp.controller('BingoController', ['BingoCardFactory', function(BingoCardFactory) {
  var self = this;
  var factory = new BingoCardFactory;
  self.check = 'This Controller is Working'
  self.check_factory = function() {
    return factory.layout;
  };
}]);
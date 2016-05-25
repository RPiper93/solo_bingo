'use strict';

bingoApp.controller('BingoController', ['BingoCardFactory', function(BingoCardFactory) {
  var self = this;
  self.check = 'This Controller is Working'
  self.check_factory = function() {
    var factory = new BingoCardFactory;
    return factory.layout;
  };
}]);
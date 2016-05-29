describe('BingoController', function() {
  beforeEach(module('bingoApp'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('BingoCardController');
  }));

  it('initialises with an empty string instead of a called number', function() {
    expect(ctrl.currentNumber).toEqual("");
  });
});
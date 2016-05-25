describe('BingoController', function() {
  beforeEach(module('bingoApp'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('BingoController');
  }));

  it('initialises with a check', function() {
    expect(ctrl.check).toEqual("This Controller is Working")
  })
});
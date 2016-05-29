describe('BingoNumberFactory', function() {
  beforeEach(module('bingoApp'));
  var bingoNumber;
  var number = 7;

  beforeEach(inject(function(BingoNumberFactory) {
    bingoNumber = new BingoNumberFactory(number);
  }));

  it('initializes with a a given value', function(){
    expect(bingoNumber.amount).toEqual(number);
  });

  it('initializes as an unmarked number', function(){
    expect(bingoNumber.marked).toEqual(false);
  });

  it('can be changed to marked if the number is equal to a given number', function(){
    bingoNumber.mark(number);
    expect(bingoNumber.marked).toEqual(true);
  });
});
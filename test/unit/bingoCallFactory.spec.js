describe('BingoCallFactory', function() {
  beforeEach(module('bingoApp'));
  var bingoCall;

  beforeEach(inject(function(BingoCallFactory) {
    bingoCall = new BingoCallFactory();
  }));

  it('initializes with 90 numbers to call', function(){
    expect(bingoCall.numbers.length).toEqual(90);
  });

  it('#callNewNumber takes the first number for the array and returns it', function(){
    var expected = bingoCall.numbers[0];
    var number = bingoCall.newNumber();

    expect(number).toEqual(expected);
  });

  it('#callNewNumber removes the called number from the initial array', function(){
    var firstNumber = bingoCall.numbers[0];
    bingoCall.newNumber();
    expect(firstNumber).not.toEqual(bingoCall.numbers[0]);
  });

  it('saves the called number', function(){
    var calledNumber = bingoCall.newNumber();
    expect(bingoCall.currentNumber).toEqual(calledNumber);
  });
});
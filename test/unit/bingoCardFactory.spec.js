describe('BingoCardFactory', function() {
  beforeEach(module('bingoApp'));

  var bingoCard;
  var possibleCardPermutations = [
    [3,3,3,1,1,1,1,1,1],
    [3,3,2,2,1,1,1,1,1],
    [3,2,2,2,2,1,1,1,1],
    [2,2,2,2,2,2,1,1,1]
  ];

  beforeEach(inject(function(BingoCardFactory) {
    bingoCard = new BingoCardFactory();
  }));

  it('initialises with 15 free spaces for numbers', function() {
    expect(bingoCard.freeSpaces).toEqual(15);
  });

  it('initialises with an empty card', function() {
    expect(bingoCard.entries).toEqual([]);
  });

  it('initialises with one of four potential Bingo Card Permutations', function() {
    expect(bingoCard.layout.length).toEqual(9);
  });

  it('the first number on the card is less than 10', function() {
    bingoCard.generate();
    expect(bingoCard.entries[0]).toBeLessThan(10);
  });
});
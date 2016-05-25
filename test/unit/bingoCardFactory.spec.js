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

  it('initialises with an empty card', function() {
    expect(bingoCard.entries).toEqual([]);
  });

  it('initialises with one of four potential Bingo Card Permutations', function() {
    expect(bingoCard.layout.length).toEqual(9);
  });

  it('the first number on the card is less than 10', function() {
    bingoCard.generate();
    console.log(bingoCard.entries);
    expect(bingoCard.entries[0]).toBeLessThan(11);
  });

  it('generates a card with 15 unique numbers on it', function() {
    bingoCard.generate();
    expect(bingoCard.entries.length).toEqual(15);
  });
});
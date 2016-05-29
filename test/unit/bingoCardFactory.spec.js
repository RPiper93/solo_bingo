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

  it('initialises with an empty card with 3 rows', function() {
    expect(bingoCard.entries).toEqual([ [], [], [] ]);
  });

  it('initialises with one of four potential Bingo Card Permutations', function() {
    expect(bingoCard.layout.length).toEqual(9);
  });

  it('generates a card with 9 entries per row', function() {
    bingoCard.generate();
    var row = bingoCard.entries[0];
    expect(row.length).toEqual(9);
  });

  it('generates a card with 4 free spaces per row', function() {
    bingoCard.generate();
    var card = bingoCard.entries;
    expect(countSpaces(card, 0)).toEqual(4);
  });
});

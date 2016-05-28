describe('BingoCardFactory', function() {
  beforeEach(module('bingoApp'));

  var position
  var emptyCard = {0: [], 1: [], 2:[]}

  beforeEach(inject(function(BingoPositionsFactory) {
    position = new BingoPositionsFactory();
  }));

  it('returns undefined if 3 numbers in row', function() {
    expect(position.check(emptyCard, 3)).toEqual(undefined);
  });
});

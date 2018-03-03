const flush = require('./');

describe('flush', () => {
  it('returns flush rank', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'hearts' }
    ];

    expect(flush(cards)).toEqual({
      rank: 'flush',
      score: [6, 5, 4, 3, 2]
    });
  });

  it('returns false when is not flush', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 7, suit: 'spades' }
    ];

    expect(flush(cards)).toEqual(false);
  });
});

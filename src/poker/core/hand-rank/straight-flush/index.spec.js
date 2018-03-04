const straightFlush = require('./');

describe('straight flush', () => {
  it('returns straight flush rank', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'hearts' }
    ];

    expect(straightFlush(cards)).toEqual({
      rank: 'straight-flush',
      score: [6, 5, 4, 3, 2]
    });
  });

  it('returns false when is not sequencial', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 7, suit: 'hearts' }
    ];

    expect(straightFlush(cards)).toEqual(false);
  });

  it('returns false when is not all same suit', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'clubs' }
    ];

    expect(straightFlush(cards)).toEqual(false);
  });
});

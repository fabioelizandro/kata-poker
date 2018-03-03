const twoPairs = require('./');

describe('two pairs', () => {
  it('returns two pairs rank', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 4, suit: 'clubs' },
      { number: 4, suit: 'hearts' },
      { number: 6, suit: 'dimonds' },
      { number: 6, suit: 'hearts' }
    ];

    expect(twoPairs(cards)).toEqual({
      rank: 'two-pairs',
      score: [12, 8, 2]
    });
  });

  it('returns false when there are not two pairs', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 6, suit: 'spades' },
      { number: 6, suit: 'hearts' }
    ];

    expect(twoPairs(cards)).toEqual(false);
  });
});

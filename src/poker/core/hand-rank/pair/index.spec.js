const pair = require('./');

describe('pair', () => {
  it('returns pair rank', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 6, suit: 'dimonds' },
      { number: 6, suit: 'hearts' }
    ];

    expect(pair(cards)).toEqual({
      rank: 'pair',
      score: [12, 4, 3, 2]
    });
  });

  it('returns false when there is NO pair', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'hearts' }
    ];

    expect(pair(cards)).toEqual(false);
  });
});

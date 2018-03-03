const threeOfAKind = require('./');

describe('pair', () => {
  it('returns pair rank', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 6, suit: 'clubs' },
      { number: 6, suit: 'dimonds' },
      { number: 6, suit: 'hearts' }
    ];

    expect(threeOfAKind(cards)).toEqual({
      rank: 'three-of-a-kind',
      score: [6, 3, 2]
    });
  });

  it('returns false is not a three of a kind', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'hearts' }
    ];

    expect(threeOfAKind(cards)).toEqual(false);
  });
});

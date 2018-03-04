const fourOfAKind = require('./');

describe('four of a kind', () => {
  it('returns four of a kind rank', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 6, suit: 'spades' },
      { number: 6, suit: 'clubs' },
      { number: 6, suit: 'dimonds' },
      { number: 6, suit: 'hearts' }
    ];

    expect(fourOfAKind(cards)).toEqual({
      rank: 'four-of-a-kind',
      score: [6, 2]
    });
  });

  it('returns false is not a four of a kind', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 6, suit: 'clubs' },
      { number: 6, suit: 'spades' },
      { number: 6, suit: 'hearts' }
    ];

    expect(fourOfAKind(cards)).toEqual(false);
  });
});

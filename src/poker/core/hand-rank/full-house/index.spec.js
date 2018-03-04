const fullHouse = require('./');

describe('full house', () => {
  it('returns full house rank', () => {
    const cards = [
      { number: 4, suit: 'hearts' },
      { number: 4, suit: 'clubs' },
      { number: 6, suit: 'spades' },
      { number: 6, suit: 'dimonds' },
      { number: 6, suit: 'hearts' }
    ];

    expect(fullHouse(cards)).toEqual({
      rank: 'full-house',
      score: [6, 4]
    });
  });

  it('returns false when there are not two pairs', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 6, suit: 'dimonds' },
      { number: 6, suit: 'spades' },
      { number: 6, suit: 'hearts' }
    ];

    expect(fullHouse(cards)).toEqual(false);
  });
});

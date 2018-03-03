const highCard = require('./');

describe('high card', () => {
  it('returns high card rank', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'hearts' }
    ];

    expect(highCard(cards)).toEqual({
      rank: 'high-card',
      score: 6
    });
  });
});

const handRank = require('./');

describe('hand hank', () => {
  it('returns high card', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'hearts' }
    ];

    expect(handRank(cards)).toEqual({
      rank: 'high-card',
      score: 6,
      level: 0
    });
  });

  it('returns pair over high card', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 6, suit: 'dimonds' },
      { number: 6, suit: 'hearts' }
    ];

    expect(handRank(cards)).toEqual({
      rank: 'pair',
      score: 4,
      level: 1
    });
  });
});

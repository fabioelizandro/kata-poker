const straight = require('./');

describe('straight', () => {
  it('returns straight rank', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'hearts' }
    ];

    expect(straight(cards)).toEqual({
      rank: 'straight',
      score: [6, 5, 4, 3, 2]
    });
  });

  it('returns false when is not straight', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 7, suit: 'hearts' }
    ];

    expect(straight(cards)).toEqual(false);
  });
});

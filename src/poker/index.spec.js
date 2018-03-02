const poker = require('./');

describe('poker', () => {
  it('returns winners and losers', () => {
    const cards1 = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'dimonds' },
      { number: 5, suit: 'spades' },
      { number: 9, suit: 'clubs' },
      { number: 13, suit: 'dimonds' }
    ];

    const cards2 = [
      { number: 2, suit: 'clubs' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'spades' },
      { number: 8, suit: 'clubs' },
      { number: 14, suit: 'hearts' }
    ];

    expect(poker([cards1, cards2])).toEqual({
      winners: [
        {
          rank: 'high-card',
          score: 14,
          level: 0,
          cards: cards2
        }
      ],
      losers: [
        {
          rank: 'high-card',
          score: 13,
          level: 0,
          cards: cards1
        }
      ]
    });
  });
});

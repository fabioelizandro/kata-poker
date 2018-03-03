const poker = require('./');

describe('poker', () => {
  it('returns winners and losers', () => {
    const player1 = {
      id: 'Player1',
      cards: [
        { number: 2, suit: 'hearts' },
        { number: 3, suit: 'dimonds' },
        { number: 5, suit: 'spades' },
        { number: 9, suit: 'clubs' },
        { number: 13, suit: 'dimonds' }
      ]
    };

    const player2 = {
      id: 'Player2',
      cards: [
        { number: 2, suit: 'clubs' },
        { number: 3, suit: 'hearts' },
        { number: 4, suit: 'spades' },
        { number: 8, suit: 'clubs' },
        { number: 14, suit: 'hearts' }
      ]
    };

    expect(poker([player1, player2])).toEqual({
      winners: [
        {
          rank: 'high-card',
          score: [14, 8, 4, 3, 2],
          level: 0,
          cards: player2.cards,
          id: 'Player2'
        }
      ],
      losers: [
        {
          rank: 'high-card',
          score: [13, 9, 5, 3, 2],
          level: 0,
          cards: player1.cards,
          id: 'Player1'
        }
      ]
    });
  });
});

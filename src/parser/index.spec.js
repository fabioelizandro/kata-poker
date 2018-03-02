const parser = require('./');

describe('parser', () => {
  it('parsers player and cards', () => {
    const sample = `
    Player1: 2H 3D 5S 9C KD  Player2: 2C 3H 4S 8C AH
    Player3: 2H 4S 4C 2D 4H  Player4: 2S 8S AS QS 3S
    `;

    expect(parser(sample)).toEqual([
      [
        {
          id: 'Player1',
          cards: [
            { number: 2, suit: 'hearts' },
            { number: 3, suit: 'dimonds' },
            { number: 5, suit: 'spades' },
            { number: 9, suit: 'clubs' },
            { number: 13, suit: 'dimonds' }
          ]
        },
        {
          id: 'Player2',
          cards: [
            { number: 2, suit: 'clubs' },
            { number: 3, suit: 'hearts' },
            { number: 4, suit: 'spades' },
            { number: 8, suit: 'clubs' },
            { number: 14, suit: 'hearts' }
          ]
        }
      ],

      [
        {
          id: 'Player3',
          cards: [
            { number: 2, suit: 'hearts' },
            { number: 4, suit: 'spades' },
            { number: 4, suit: 'clubs' },
            { number: 2, suit: 'dimonds' },
            { number: 4, suit: 'hearts' }
          ]
        },
        {
          id: 'Player4',
          cards: [
            { number: 2, suit: 'spades' },
            { number: 8, suit: 'spades' },
            { number: 14, suit: 'spades' },
            { number: 12, suit: 'spades' },
            { number: 3, suit: 'spades' }
          ]
        }
      ]
    ]);
  });
});

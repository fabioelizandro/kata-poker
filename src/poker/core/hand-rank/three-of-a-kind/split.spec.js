const split = require('./split');

describe('split three of a kind', () => {
  it('splits cards in three of a kind and remaining', () => {
    const cardsSample1 = [
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'dimonds' },
      { number: 6, suit: 'hearts' },
      { number: 6, suit: 'spades' },
      { number: 6, suit: 'dimonds' }
    ];

    expect(split(cardsSample1)).toEqual({
      threeOfAKind: [
        { number: 6, suit: 'hearts' },
        { number: 6, suit: 'spades' },
        { number: 6, suit: 'dimonds' }
      ],
      remaining: [
        { number: 3, suit: 'hearts' },
        { number: 4, suit: 'dimonds' }
      ]
    });

    const cardsSample2 = [
      { number: 4, suit: 'hearts' },
      { number: 6, suit: 'clubs' },
      { number: 8, suit: 'clubs' },
      { number: 8, suit: 'dimonds' },
      { number: 8, suit: 'hearts' }
    ];

    expect(split(cardsSample2)).toEqual({
      threeOfAKind: [
        { number: 8, suit: 'clubs' },
        { number: 8, suit: 'dimonds' },
        { number: 8, suit: 'hearts' }
      ],
      remaining: [
        { number: 4, suit: 'hearts' },
        { number: 6, suit: 'clubs' },
      ]
    });
  });
})

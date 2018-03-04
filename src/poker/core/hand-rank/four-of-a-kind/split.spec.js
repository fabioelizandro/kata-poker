const split = require('./split');

describe('split four of a kind', () => {
  it('splits cards in four of a kind and remaining', () => {
    const cardsSample1 = [
      { number: 3, suit: 'hearts' },
      { number: 6, suit: 'clubs' },
      { number: 6, suit: 'hearts' },
      { number: 6, suit: 'spades' },
      { number: 6, suit: 'dimonds' }
    ];

    expect(split(cardsSample1)).toEqual({
      fourOfAKind: [
        { number: 6, suit: 'clubs' },
        { number: 6, suit: 'hearts' },
        { number: 6, suit: 'spades' },
        { number: 6, suit: 'dimonds' }
      ],
      remaining: [
        { number: 3, suit: 'hearts' },
      ]
    });

    const cardsSample2 = [
      { number: 8, suit: 'hearts' },
      { number: 6, suit: 'spades' },
      { number: 6, suit: 'clubs' },
      { number: 6, suit: 'dimonds' },
      { number: 6, suit: 'hearts' }
    ];

    expect(split(cardsSample2)).toEqual({
      fourOfAKind: [
        { number: 6, suit: 'spades' },
        { number: 6, suit: 'clubs' },
        { number: 6, suit: 'dimonds' },
        { number: 6, suit: 'hearts' }
      ],
      remaining: [
        { number: 8, suit: 'hearts' }
      ]
    });
  });
})

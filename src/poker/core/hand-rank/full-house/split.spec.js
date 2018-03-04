const split = require('./split');

describe('split full house', () => {
  it('splits cards in three of a kind and pair', () => {
    const cardsSample1 = [
      { number: 4, suit: 'hearts' },
      { number: 4, suit: 'dimonds' },
      { number: 6, suit: 'hearts' },
      { number: 6, suit: 'spades' },
      { number: 6, suit: 'hearts' }
    ];

    expect(split(cardsSample1)).toEqual({
      threeOfAKind: [
        { number: 6, suit: 'hearts' },
        { number: 6, suit: 'spades' },
        { number: 6, suit: 'hearts' }
      ],
      pair: [
        { number: 4, suit: 'hearts' },
        { number: 4, suit: 'dimonds' },
      ]
    });

    const cardsSample2 = [
      { number: 6, suit: 'hearts' },
      { number: 6, suit: 'clubs' },
      { number: 8, suit: 'spades' },
      { number: 8, suit: 'dimonds' },
      { number: 8, suit: 'hearts' }
    ];

    expect(split(cardsSample2)).toEqual({
      threeOfAKind: [
        { number: 8, suit: 'spades' },
        { number: 8, suit: 'dimonds' },
        { number: 8, suit: 'hearts' }
      ],
      pair: [
        { number: 6, suit: 'hearts' },
        { number: 6, suit: 'clubs' },
      ]
    });
  });
})

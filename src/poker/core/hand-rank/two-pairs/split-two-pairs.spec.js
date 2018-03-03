const splitTwoPairs = require('./split-two-pairs');

describe('split two pairs', () => {
  it('splits cards in firstPair, secondPair and not pair', () => {
    const cardsSample1 = [
      { number: 4, suit: 'hearts' },
      { number: 4, suit: 'dimonds' },
      { number: 6, suit: 'hearts' },
      { number: 6, suit: 'spades' },
      { number: 8, suit: 'hearts' }
    ];

    expect(splitTwoPairs(cardsSample1)).toEqual({
      pairs: [
        [
          { number: 4, suit: 'hearts' },
          { number: 4, suit: 'dimonds' }
        ],

        [
          { number: 6, suit: 'hearts' },
          { number: 6, suit: 'spades' }
        ]
      ],
      notPair: [
        { number: 8, suit: 'hearts' }
      ]
    });

    const cardsSample2 = [
      { number: 4, suit: 'hearts' },
      { number: 6, suit: 'clubs' },
      { number: 6, suit: 'hearts' },
      { number: 8, suit: 'dimonds' },
      { number: 8, suit: 'hearts' }
    ];

    expect(splitTwoPairs(cardsSample2)).toEqual({
      pairs: [
        [
          { number: 6, suit: 'clubs' },
          { number: 6, suit: 'hearts' }
        ],

        [
          { number: 8, suit: 'dimonds' },
          { number: 8, suit: 'hearts' }
        ]
      ],
      notPair: [
        { number: 4, suit: 'hearts' }
      ]
    });
  });
})

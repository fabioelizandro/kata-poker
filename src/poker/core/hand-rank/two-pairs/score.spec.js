const score = require('./score');

describe('two pairs score', () => {
  it('suns two pairs in decreasing order', () => {
    const cardsSample1 = {
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
    };

    expect(score(cardsSample1)).toEqual([
      12, 8, 8
    ]);

    const cardsSample2 = {
      pairs: [
        [
          { number: 8, suit: 'dimonds' },
          { number: 8, suit: 'hearts' }
        ],

        [
          { number: 6, suit: 'clubs' },
          { number: 6, suit: 'hearts' }
        ]
      ],
      notPair: [
        { number: 4, suit: 'hearts' }
      ]
    };

    expect(score(cardsSample2)).toEqual([
      16, 12, 4
    ]);
  });
})

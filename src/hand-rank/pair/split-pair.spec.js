const splitPair = require('./split-pair');

describe('split pair', () => {
  it('splits cards in pair and not pair', () => {
    const cardsSample1 = [
      { number: 4, suit: 'hearts' },
      { number: 4, suit: 'dimonds' },
      { number: 6, suit: 'hearts' },
      { number: 7, suit: 'hearts' },
      { number: 8, suit: 'hearts' }
    ];

    expect(splitPair(cardsSample1)).toEqual({
      pair: [
        { number: 4, suit: 'hearts' },
        { number: 4, suit: 'dimonds' },
      ],
      notPair: [
        { number: 6, suit: 'hearts' },
        { number: 7, suit: 'hearts' },
        { number: 8, suit: 'hearts' }
      ]
    });

    const cardsSample2 = [
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'hearts' },
      { number: 8, suit: 'dimonds' },
      { number: 8, suit: 'hearts' }
    ];

    expect(splitPair(cardsSample2)).toEqual({
      pair: [
        { number: 8, suit: 'dimonds' },
        { number: 8, suit: 'hearts' }
      ],
      notPair: [
        { number: 4, suit: 'hearts' },
        { number: 5, suit: 'hearts' },
        { number: 6, suit: 'hearts' }
      ]
    });
  });
})

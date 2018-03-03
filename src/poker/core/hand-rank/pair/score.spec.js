const score = require('./score');

describe('pair score', () => {
  it('suns the pair and returns the nor pair sorted by the highest', () => {
    const cardsSample1 = {
      pair: [
        { number: 4, suit: 'hearts' },
        { number: 4, suit: 'dimonds' },
      ],
      notPair: [
        { number: 6, suit: 'hearts' },
        { number: 7, suit: 'hearts' },
        { number: 8, suit: 'hearts' }
      ]
    };

    expect(score(cardsSample1)).toEqual([
      8, 8, 7, 6
    ]);

    const cardsSample2 = {
      pair: [
        { number: 8, suit: 'dimonds' },
        { number: 8, suit: 'hearts' }
      ],
      notPair: [
        { number: 4, suit: 'hearts' },
        { number: 5, suit: 'hearts' },
        { number: 6, suit: 'hearts' }
      ]
    };

    expect(score(cardsSample2)).toEqual([
      16, 6, 5, 4
    ]);
  });
})

const score = require('./score');

describe('pair score', () => {
  it('returns the highest number of the cards not forming the pair', () => {
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

    expect(score(cardsSample1)).toEqual(8);

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

    expect(score(cardsSample2)).toEqual(6);
  });
})

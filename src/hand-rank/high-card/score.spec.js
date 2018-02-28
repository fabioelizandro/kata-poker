const score = require('./score');

describe('high card score', () => {
  it('returns the highest number ', () => {
    const cardsSample1 = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'hearts' }
    ];

    expect(score(cardsSample1)).toEqual(6);

    const cardsSample2 = [
      { number: 14, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'hearts' }
    ];

    expect(score(cardsSample2)).toEqual(14);
  });
})

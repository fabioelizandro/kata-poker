const score = require('./score');

describe('two pairs score', () => {
  it('returns the highest pair then the second pair then the remaining', () => {
    const cardsSample1 = {
      threeOfAKind: [
        { number: 6, suit: 'hearts' },
        { number: 6, suit: 'spades' },
        { number: 6, suit: 'hearts' }
      ],
      pair: [
        { number: 4, suit: 'hearts' },
        { number: 4, suit: 'dimonds' },
      ]
    };

    expect(score(cardsSample1)).toEqual([
      6, 4
    ]);

    const cardsSample2 = {
      threeOfAKind: [
        { number: 6, suit: 'spades' },
        { number: 6, suit: 'dimonds' },
        { number: 6, suit: 'hearts' }
      ],
      pair: [
        { number: 8, suit: 'hearts' },
        { number: 8, suit: 'clubs' },
      ]
    };

    expect(score(cardsSample2)).toEqual([
      6, 8
    ]);
  });
});

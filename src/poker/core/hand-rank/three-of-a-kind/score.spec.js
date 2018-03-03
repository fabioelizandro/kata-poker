const score = require('./score');

describe('pair score', () => {
  it('suns the pair and returns the nor pair sorted by the highest', () => {
    const cardsSample1 = {
      threeOfAKind: [
        { number: 2, suit: 'hearts' },
        { number: 2, suit: 'spades' },
        { number: 2, suit: 'dimonds' }
      ],
      remaining: [
        { number: 3, suit: 'hearts' },
        { number: 4, suit: 'dimonds' }
      ]
    };

    expect(score(cardsSample1)).toEqual([
      2, 4, 3
    ]);

    const cardsSample2 = {
      threeOfAKind: [
        { number: 3, suit: 'clubs' },
        { number: 3, suit: 'dimonds' },
        { number: 3, suit: 'hearts' }
      ],
      remaining: [
        { number: 4, suit: 'hearts' },
        { number: 6, suit: 'clubs' },
      ]
    };

    expect(score(cardsSample2)).toEqual([
      3, 6, 4
    ]);
  });
})

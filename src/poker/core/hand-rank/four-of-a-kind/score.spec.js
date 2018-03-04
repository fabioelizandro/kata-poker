const score = require('./score');

describe('pair score', () => {
  it('suns the pair and returns the nor pair sorted by the highest', () => {
    const cardsSample1 = {
      fourOfAKind: [
        { number: 6, suit: 'clubs' },
        { number: 6, suit: 'hearts' },
        { number: 6, suit: 'spades' },
        { number: 6, suit: 'dimonds' }
      ],
      remaining: [
        { number: 3, suit: 'hearts' },
      ]
    };

    expect(score(cardsSample1)).toEqual([
      6, 3
    ]);

    const cardsSample2 = {
      fourOfAKind: [
        { number: 6, suit: 'spades' },
        { number: 6, suit: 'clubs' },
        { number: 6, suit: 'dimonds' },
        { number: 6, suit: 'hearts' }
      ],
      remaining: [
        { number: 8, suit: 'hearts' }
      ]
    };

    expect(score(cardsSample2)).toEqual([
      6, 8
    ]);
  });
})

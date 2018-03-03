const handRank = require('./');

describe('hand hank', () => {
  it('returns high card', () => {
    const cards = [
      { number: 2, suit: 'dimonds' },
      { number: 7, suit: 'hearts' },
      { number: 8, suit: 'clubs' },
      { number: 10, suit: 'hearts' },
      { number: 12, suit: 'spades' }
    ];

    expect(handRank(cards)).toEqual({
      rank: 'high-card',
      score: [12, 10, 8, 7, 2],
      level: 0
    });
  });

  it('returns pair over high card', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 6, suit: 'dimonds' },
      { number: 6, suit: 'hearts' }
    ];

    expect(handRank(cards)).toEqual({
      rank: 'pair',
      score: [6, 4, 3, 2],
      level: 1
    });
  });


  it('returns two pairs over pair', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 4, suit: 'clubs' },
      { number: 4, suit: 'hearts' },
      { number: 6, suit: 'dimonds' },
      { number: 6, suit: 'hearts' }
    ];

    expect(handRank(cards)).toEqual({
      rank: 'two-pairs',
      score: [6, 4, 2],
      level: 2
    });
  });

  it('returns three of a kind over two pairs', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 4, suit: 'clubs' },
      { number: 6, suit: 'clubs' },
      { number: 6, suit: 'dimonds' },
      { number: 6, suit: 'hearts' }
    ];

    expect(handRank(cards)).toEqual({
      rank: 'three-of-a-kind',
      score: [6, 4, 2],
      level: 3
    });
  });

  it('returns straight over three of a kind', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'clubs' },
      { number: 4, suit: 'clubs' },
      { number: 5, suit: 'dimonds' },
      { number: 6, suit: 'hearts' }
    ];

    expect(handRank(cards)).toEqual({
      rank: 'straight',
      score: [6, 5, 4, 3, 2],
      level: 4
    });
  });
});

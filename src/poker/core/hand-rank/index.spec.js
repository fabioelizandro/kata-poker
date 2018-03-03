const handRank = require('./');

describe('hand hank', () => {
  it('returns high card', () => {
    const cards = [
      { number: 2, suit: 'hearts' },
      { number: 3, suit: 'hearts' },
      { number: 4, suit: 'hearts' },
      { number: 5, suit: 'hearts' },
      { number: 6, suit: 'hearts' }
    ];

    expect(handRank(cards)).toEqual({
      rank: 'high-card',
      score: [6, 5, 4, 3, 2],
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
      score: [12, 4, 3, 2],
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
      score: [12, 8, 2],
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
});

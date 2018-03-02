const winner = require('./');

describe('winner', () => {
  it('splits who is winner or equal to the winner from losers', () => {
    const rankA = { level: 3, score: 6 };
    const rankB = { level: 3, score: 6 };
    const rankC = { level: 2, score: 5 };
    const ranks = [rankA, rankB, rankC];
    const bestRank = rankA;

    expect(winner(bestRank, ranks)).toEqual({
      winners: [rankA, rankB],
      losers: [rankC]
    });
  });
});

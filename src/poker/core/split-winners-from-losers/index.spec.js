const splitWinnersFromLosers = require('./');

describe('split winners from losers', () => {
  it('splits who is winner or equal to the winner from losers', () => {
    const rankA = { level: 3, score: [6] };
    const rankB = { level: 3, score: [6] };
    const rankC = { level: 2, score: [5] };
    const ranks = [rankA, rankB, rankC];

    expect(splitWinnersFromLosers(ranks)).toEqual({
      winners: [rankA, rankB],
      losers: [rankC]
    });
  });

  it('sorts ranks to split', () => {
    const rankA = { level: 3, score: [6] };
    const rankB = { level: 3, score: [6] };
    const rankC = { level: 2, score: [5] };
    const ranks = [rankC, rankB, rankA];

    expect(splitWinnersFromLosers(ranks)).toEqual({
      winners: [rankA, rankB],
      losers: [rankC]
    });
  });
});

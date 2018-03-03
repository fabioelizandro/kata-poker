const rankSort = require('./rank-sort');

describe('rank sort', () => {
  it('sorts ranks by level and score', () => {
    const rankA = { level: 3, score: [6] };
    const rankB = { level: 2, score: [6] };
    const rankC = { level: 2, score: [5] };
    const rankD = { level: 1, score: [6] };
    const rankE = { level: 1, score: [5] };

    const shuffled = [rankE, rankB, rankA, rankD, rankC];

    expect(rankSort(shuffled)).toEqual([
      rankA,
      rankB,
      rankC,
      rankD,
      rankE
    ]);
  });
});

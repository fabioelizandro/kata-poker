const rankCompare = require('./rank-compare');

describe('rank compare', () => {
  it('returns positive when A level is less than B', () => {
    const rankA = { score: 6, level: 0 };
    const rankB = { score: 6, level: 1 };

    expect(rankCompare(rankA, rankB)).toEqual(1);
  });

  it('returns 0 when A level is equal to B', () => {
    const rankA = { score: 6, level: 0 };
    const rankB = { score: 6, level: 0 };

    expect(rankCompare(rankA, rankB)).toEqual(0);
  });

  it('returns negative when A level is greater than B', () => {
    const rankA = { score: 6, level: 1 };
    const rankB = { score: 6, level: 0 };

    expect(rankCompare(rankA, rankB)).toEqual(-1);
  });

  it('returns positive when A level is equal to B but score is less', () => {
    const rankA = { score: 5, level: 0 };
    const rankB = { score: 6, level: 0 };

    expect(rankCompare(rankA, rankB)).toEqual(1);
  });

  it('returns negative when A level is equal to B but score is greater', () => {
    const rankA = { score: 6, level: 0 };
    const rankB = { score: 5, level: 0 };

    expect(rankCompare(rankA, rankB)).toEqual(-1);
  });
});

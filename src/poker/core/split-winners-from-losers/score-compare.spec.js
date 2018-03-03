const scoreCompare = require('./score-compare');

describe('rank compare', () => {
  it('returns positive when the highest A score is less than B', () => {
    const scoreA = [9];
    const scoreB = [10];

    expect(scoreCompare(scoreA, scoreB)).toEqual(1);
  });

  it('returns 0 when the highest A score is equal to B', () => {
    const scoreA = [9];
    const scoreB = [9];

    expect(scoreCompare(scoreA, scoreB)).toEqual(0);
  });

  it('returns negative when the highest A score is greater than B', () => {
    const scoreA = [10];
    const scoreB = [9];

    expect(scoreCompare(scoreA, scoreB)).toEqual(-1);
  });

  it('breakes tie at first difference', () => {
    const scoreA = [9, 8, 5];
    const scoreB = [9, 8, 4];
    expect(scoreCompare(scoreA, scoreB)).toEqual(-1);

    const scoreC = [9, 6, 14];
    const scoreD = [9, 7, 13];
    expect(scoreCompare(scoreC, scoreD)).toEqual(1);

    const scoreE = [2, 3, 7, 5];
    const scoreF = [2, 3, 6, 14];
    expect(scoreCompare(scoreE, scoreF)).toEqual(-1);
  });
});

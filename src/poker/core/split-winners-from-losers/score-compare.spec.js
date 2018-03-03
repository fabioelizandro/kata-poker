const scoreCompare = require('./score-compare');

describe('rank compare', () => {
  it('returns positive when the highest A score is less than B', () => {
    const scoreA = [9, 8, 7, 6, 5];
    const scoreB = [10, 8, 7, 6, 5];

    expect(scoreCompare(scoreA, scoreB)).toEqual(1);
  });

  it('returns 0 when the highest A score is equal to B', () => {
    const scoreA = [9, 8, 7, 6, 5];
    const scoreB = [9, 8, 7, 6, 5];

    expect(scoreCompare(scoreA, scoreB)).toEqual(0);
  });

  it('returns negative when the highest A score is greater than B', () => {
    const scoreA = [10, 8, 7, 6, 5];
    const scoreB = [9, 8, 7, 6, 5];

    expect(scoreCompare(scoreA, scoreB)).toEqual(-1);
  });

  it('finds the hightest score when is not ordered by the highest', () => {
    const scoreA = [8, 7, 10, 6, 5];
    const scoreB = [8, 7, 6, 9, 5];

    expect(scoreCompare(scoreA, scoreB)).toEqual(-1);
  });

  it('falls to the next highest score and the highest ties', () => {
    const scoreA = [9, 8, 7, 6, 5];
    const scoreB = [9, 8, 7, 5, 4];
    expect(scoreCompare(scoreA, scoreB)).toEqual(-1);

    const scoreC = [9, 8, 7, 6, 4];
    const scoreD = [9, 8, 7, 6, 5];
    expect(scoreCompare(scoreC, scoreD)).toEqual(1);

    const scoreE = [9, 8, 7, 4, 3];
    const scoreF = [9, 8, 6, 4, 3];
    expect(scoreCompare(scoreE, scoreF)).toEqual(-1);
  });
});

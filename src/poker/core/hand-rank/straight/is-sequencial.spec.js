const isSequencial = require('./is-sequencial');

describe('is sequencial', () => {
  it('returns true when all items are sequencial', () => {
    const listA = [1, 2, 3];
    expect(isSequencial(listA)).toEqual(true);

    const listB = [2, 3];
    expect(isSequencial(listB)).toEqual(true);
  });

  it('returns false when all items are sequencial', () => {
    const listA = [1, 2, 4];
    expect(isSequencial(listA)).toEqual(false);

    const listB = [2, 4];
    expect(isSequencial(listB)).toEqual(false);
  });

  it('sorts to compare', () => {
    const listA = [3, 2, 1];
    expect(isSequencial(listA)).toEqual(true);

    const listB = [10, 9];
    expect(isSequencial(listB)).toEqual(true);
  });

  it('returns true for single', () => {
    const listA = [3];
    expect(isSequencial(listA)).toEqual(true);

    const listB = [10];
    expect(isSequencial(listB)).toEqual(true);
  });
});

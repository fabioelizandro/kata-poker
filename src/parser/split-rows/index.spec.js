const splitRows = require('./');

describe('split rows', () => {
  it('splits rows', () => {
    const sample1 = `
    Player1: 2H 3D 5S 9C KD  Player2: 2C 3H 4S 8C AH
    Player1: 2H 4S 4C 2D 4H  Player2: 2S 8S AS QS 3S
    `;

    expect(splitRows(sample1)).toEqual([
      'Player1: 2H 3D 5S 9C KD  Player2: 2C 3H 4S 8C AH',
      'Player1: 2H 4S 4C 2D 4H  Player2: 2S 8S AS QS 3S'
    ]);

    const sample2 = `
    Player1: 2H 3D 5S 9C KD  Player2: 2C 3H 4S 8C KH
    Player1: 2H 3D 5S 9C KD  Player2: 2D 3H 5C 9S KH
    `;

    expect(splitRows(sample2)).toEqual([
      'Player1: 2H 3D 5S 9C KD  Player2: 2C 3H 4S 8C KH',
      'Player1: 2H 3D 5S 9C KD  Player2: 2D 3H 5C 9S KH'
    ]);
  });
});

const splitPlayers = require('./');

describe('split players', () => {
  it('splits players', () => {
    const sample1 = 'Player1: 2H 3D 5S 9C KD  Player2: 2C 3H 4S 8C AH';
    expect(splitPlayers(sample1)).toEqual([
      'Player1: 2H 3D 5S 9C KD',
      'Player2: 2C 3H 4S 8C AH'
    ]);

    const sample2 = 'Player3: AH 3D 6S 9C 8D  Player4: KC JH QS 2C 5H';
    expect(splitPlayers(sample2)).toEqual([
      'Player3: AH 3D 6S 9C 8D',
      'Player4: KC JH QS 2C 5H'
    ]);
  });
});

const splitPlayerFromCards = require('./');

describe('split player from cards', () => {
  it('splits player from cards', () => {
    const sample1 = 'Player1: 2H 3D 5S 9C KD';
    expect(splitPlayerFromCards(sample1)).toEqual({
      player: 'Player1',
      cards: '2H 3D 5S 9C KD'
    });

    const sample2 = 'Player2: 2C 3H 4S 8C AH';
    expect(splitPlayerFromCards(sample2)).toEqual({
      player: 'Player2',
      cards: '2C 3H 4S 8C AH'
    });
  });
});

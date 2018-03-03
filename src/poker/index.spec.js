const poker = require('./');

describe('poker', () => {
  it('returns the winner', () => {
    const sample = `
    Player1: 2H 3D 5S 9C KD  Player2: 2C 3H 4S 8C AH
    Player1: 2H 3D 5S 9C AD  Player2: 2C 3H 4S 8C KH
    Player1: 2H 3D 5S 9C KD  Player2: 2D 3H 5C 9S KH
    `

    expect(poker(sample)).toEqual(
      'Winner: Player2 - with high-card\n'+
      'Winner: Player1 - with high-card\n'+
      'Tie.'
    )
  });
});

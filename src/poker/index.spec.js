const poker = require('./');

describe('poker', () => {
  describe('kata suggested test case', () => {
    it('gives the same output', () => {
      const sample = `
      Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH
      Black: 2H 4S 4C 2D 4H  White: 2S 8S AS QS 3S
      Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C KH
      Black: 2H 3D 5S 9C KD  White: 2D 3H 5C 9S KH
      `

      expect(poker(sample)).toEqual(
        'Winner: White - with high-card\n'+
        'Winner: Black - with full-house\n'+
        'Winner: Black - with high-card\n'+
        'Tie.'
      )
    });
  });
});

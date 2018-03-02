const suitParser = require('./suit-parser');

describe('suit parser', () => {
  it('parsers H to hearts', () => expect(suitParser('2H')).toEqual({ suit: 'hearts' }));

  it('parsers D to dimonds', () => expect(suitParser('2D')).toEqual({ suit: 'dimonds' }));

  it('parsers C to dimonds', () => expect(suitParser('2C')).toEqual({ suit: 'clubs' }));

  it('parsers S to dimonds', () => expect(suitParser('2S')).toEqual({ suit: 'spades' }));
});

const cardParser = require('./');

describe('card parser', () => {
  it('parsers string to a card', () => {
    expect(cardParser('2H')).toEqual({ number: 2, suit: 'hearts' });
    expect(cardParser('7S')).toEqual({ number: 7, suit: 'spades' });
    expect(cardParser('AD')).toEqual({ number: 14, suit: 'dimonds' });
  });
});

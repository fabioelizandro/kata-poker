const parser = require('./');

describe('parser', () => {
  it('parsers a hand of cards', () => {
    expect(parser('2H 10S AD')).toEqual([
      { number: 2, suit: 'hearts' },
      { number: 10, suit: 'spades' },
      { number: 14, suit: 'dimonds' },
    ]);
  });
});

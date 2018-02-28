const numberParser = require('./number-parser');

describe('number parser', () => {
  it('parsers 2 to 2', () => expect(numberParser('2H')).toEqual({ number: 2 }));

  it('parsers 3 to 3', () => expect(numberParser('3H')).toEqual({ number: 3 }));

  it('parsers 4 to 4', () => expect(numberParser('4H')).toEqual({ number: 4 }));

  it('parsers 5 to 5', () => expect(numberParser('5H')).toEqual({ number: 5 }));

  it('parsers 6 to 6', () => expect(numberParser('6H')).toEqual({ number: 6 }));

  it('parsers 7 to 7', () => expect(numberParser('7H')).toEqual({ number: 7 }));

  it('parsers 8 to 8', () => expect(numberParser('8H')).toEqual({ number: 8 }));

  it('parsers 9 to 9', () => expect(numberParser('9H')).toEqual({ number: 9 }));

  it('parsers 10 to 10', () => expect(numberParser('10H')).toEqual({ number: 10 }));

  it('parsers J to 11', () => expect(numberParser('JH')).toEqual({ number: 11 }));

  it('parsers Q to 12', () => expect(numberParser('QH')).toEqual({ number: 12 }));

  it('parsers K to 13', () => expect(numberParser('KH')).toEqual({ number: 13 }));

  it('parsers A to 14', () => expect(numberParser('AH')).toEqual({ number: 14 }));
});

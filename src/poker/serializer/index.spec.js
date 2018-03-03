const serializer = require('./');

describe('serializer', () => {
  it('serializes winner', () => {
    const sample1 = [ { rank: 'high-card', id: 'Player2'} ];
    expect(serializer(sample1)).toEqual('Winner: Player2 - with high-card');

    const sample2 = [ { rank: 'pair', id: 'Player4'} ];
    expect(serializer(sample2)).toEqual('Winner: Player4 - with pair');
  });

  it('serializes draw', () => {
    const sample = [
      { rank: 'high-card', id: 'Player1'},
      { rank: 'high-card', id: 'Player2'},
    ];

    expect(serializer(sample)).toEqual('Tie.');
  });
});

const suitMap = {
  'H': 'hearts',
  'D': 'dimonds',
  'C': 'clubs',
  'S': 'spades'
}

module.exports = cardAsString => {
  const [suitAsString] = cardAsString.match(/(H|D|C|S)/);
  return { suit: suitMap[suitAsString] };
};

module.exports = (cards) => {
  const [pair] = cards.pair;
  const notPair = cards.notPair.map(card => card.number).sort((a, b) => b - a);
  return [pair.number, ...notPair];
};

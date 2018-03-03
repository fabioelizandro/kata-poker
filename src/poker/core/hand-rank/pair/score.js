module.exports = (cards) => {
  const pairSum = cards.pair.reduce((pairSum, card) => pairSum + card.number, 0);
  const notPair = cards.notPair.map(card => card.number).sort((a, b) => b - a);
  return [pairSum, ...notPair];
};

module.exports = (cards) => {
  const sumCardNumber = (sum, card) => sum + card.number;
  const [firstPair, secondPair] = cards.pairs;

  const firstPairSum = firstPair.reduce(sumCardNumber, 0);
  const secondPairSum = secondPair.reduce(sumCardNumber, 0);
  const notPairSum = cards.notPair.reduce(sumCardNumber, 0);

  return [firstPairSum, secondPairSum, notPairSum].sort((a, b) => b - a);
};

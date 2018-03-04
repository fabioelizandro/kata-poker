module.exports = (cards) => {
  const [threeOfAKind] = cards.threeOfAKind;
  const [pair] = cards.pair;

  return [threeOfAKind.number, pair.number];
};

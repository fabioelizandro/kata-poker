module.exports = (cards) => {
  const [[firstPair], [secondPair]] = cards.pairs;
  const pairsNumber = [firstPair.number, secondPair.number].sort((a, b) => b - a);

  return [...pairsNumber, ...cards.notPair.map(card => card.number)];
};

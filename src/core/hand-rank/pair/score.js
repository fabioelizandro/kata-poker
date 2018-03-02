module.exports = (cards) => {
  return Math.max(...cards.notPair.map(card => card.number));
};

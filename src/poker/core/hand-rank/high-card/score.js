module.exports = (cards) => {
  return Math.max(...cards.map(card => card.number));
};

module.exports = (cards) => {
  return cards.map(card => card.number).sort((a, b) => b - a);
};

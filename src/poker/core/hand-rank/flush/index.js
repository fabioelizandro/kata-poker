const score = require('./score');

module.exports = (cards) => {
  const [first] = cards;
  const isFlush = cards.every(card => card.suit === first.suit);

  if (isFlush) {
    return {
      rank: 'flush',
      score: score(cards)
    }
  } else {
    return false;
  }
};

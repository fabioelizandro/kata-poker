const score = require('./score');
const isSequencial = require('./is-sequencial');

module.exports = (cards) => {
  const [firstCard] = cards;
  const isAllSameSuit = cards.every(card => card.suit === firstCard.suit);

  if (isSequencial(cards.map(card => card.number)) && isAllSameSuit) {
    return {
      rank: 'straight-flush',
      score: score(cards)
    }
  } else {
    return false;
  }
};

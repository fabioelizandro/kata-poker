const score = require('./score');
const isSequencial = require('./is-sequencial');

module.exports = (cards) => {
  if (isSequencial(cards.map(card => card.number))) {
    return {
      rank: 'straight',
      score: score(cards)
    }
  } else {
    return false;
  }
};

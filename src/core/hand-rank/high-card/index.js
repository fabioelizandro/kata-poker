const score = require('./score');

module.exports = (cards) => {
  return {
    rank: 'high-card',
    score: score(cards)
  }
};

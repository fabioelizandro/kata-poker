const score = require('./score');
const splitTwoPairs = require('./split-two-pairs');

module.exports = (cards) => {
  const splitedCards = splitTwoPairs(cards);

  if (splitedCards.pairs.length === 2) {
    return {
      rank: 'two-pairs',
      score: score(splitedCards)
    }
  } else {
    return false;
  }
};

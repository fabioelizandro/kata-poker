const score = require('./score');
const splitPair = require('./split-pair');

module.exports = (cards) => {
  const splitedCards = splitPair(cards);

  if (splitedCards.pair.length > 0) {
    return {
      rank: 'pair',
      score: score(splitedCards)
    }
  } else {
    return false;
  }
};

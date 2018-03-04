const score = require('./score');
const split = require('./split');

module.exports = (cards) => {
  const splitedCards = split(cards);

  if (splitedCards.threeOfAKind.length === 3 && splitedCards.pair.length === 2) {
    return {
      rank: 'full-house',
      score: score(splitedCards)
    }
  } else {
    return false;
  }
};

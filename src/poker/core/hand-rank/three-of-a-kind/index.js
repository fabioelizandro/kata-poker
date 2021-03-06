const score = require('./score');
const split = require('./split');

module.exports = (cards) => {
  const splitedCards = split(cards);

  if (splitedCards.threeOfAKind.length > 0) {
    return {
      rank: 'three-of-a-kind',
      score: score(splitedCards)
    }
  } else {
    return false;
  }
};

const score = require('./score');
const split = require('./split');

module.exports = (cards) => {
  const splitedCards = split(cards);

  if (splitedCards.fourOfAKind.length > 0) {
    return {
      rank: 'four-of-a-kind',
      score: score(splitedCards)
    }
  } else {
    return false;
  }
};

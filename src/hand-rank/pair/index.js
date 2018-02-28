const score = require('./score');

module.exports = (cards) => {
  const numbers = cards.map(card => card.number);

  const numbersOfPairs = numbers.filter(number => {
    const numberOfOccurrences = numbers.filter(numberToCompare => numberToCompare === number).length;
    return numberOfOccurrences > 1;
  }).length;

  if (numbersOfPairs > 0) {
    return {
      rank: 'pair',
      score: score(cards)
    }
  } else {
    return false;
  }
};

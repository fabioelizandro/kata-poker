module.exports = (cards) => {
  const numbers = cards.map(card => card.number);

  const numbersWithoutPair = numbers.filter(number => {
    const numberOfOccurrences = numbers.filter(numberToCompare => numberToCompare === number).length;
    return numberOfOccurrences === 1;
  });

  return Math.max(...numbersWithoutPair);
};

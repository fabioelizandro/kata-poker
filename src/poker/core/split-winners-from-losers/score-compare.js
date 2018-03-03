module.exports = (scoreA, scoreB) => {
  const findHighest = (index) => {
    const highestA = scoreA[index];
    const highestB = scoreB[index];
    const result = highestB - highestA;
    const hasMoreToCompare = index < scoreA.length - 1;

    if (result === 0 && hasMoreToCompare) {
      return findHighest(index + 1);
    } else {
      return result;
    }
  };

  return findHighest(0);
};

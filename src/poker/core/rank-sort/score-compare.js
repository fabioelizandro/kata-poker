module.exports = (scoreA, scoreB) => {
  const orderedScoreA = scoreA.sort((a, b) => b - a);
  const orderedScoreB = scoreB.sort((a, b) => b - a);

  const findHighest = (index) => {
    const highestA = orderedScoreA[index];
    const highestB = orderedScoreB[index];
    const result = highestB - highestA;
    const hasMoreToCompare = index < orderedScoreA.length - 1;

    if (result === 0 && hasMoreToCompare) {
      return findHighest(index + 1);
    } else {
      return result;
    }
  };

  return findHighest(0);
};

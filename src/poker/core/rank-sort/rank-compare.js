module.exports = (rankA, rankB) => {
  return (rankB.level - rankA.level) || (rankB.score - rankA.score);
};

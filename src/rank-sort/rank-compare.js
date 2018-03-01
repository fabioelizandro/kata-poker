module.exports = (rankA, rankB) => {
  return (rankA.level - rankB.level) || (rankA.score - rankB.score);
};

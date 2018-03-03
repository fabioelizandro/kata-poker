const scoreCompare = require('./score-compare');

module.exports = (rankA, rankB) => {
  return (rankB.level - rankA.level) || scoreCompare(rankA.score, rankB.score);
};

const rankCompare = require('./rank-compare');

module.exports = (ranks) => {
  return ranks.sort(rankCompare);
};

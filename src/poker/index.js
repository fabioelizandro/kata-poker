const handRank = require('./hand-rank');
const rankSort = require('./rank-sort');
const winner = require('./winner');

module.exports = (hands) => {
  const ranks = hands.map(cards => ({ ...handRank(cards), cards }));
  const sortedRanks = rankSort(ranks);
  const [bestRank] = sortedRanks;

  return winner(bestRank, sortedRanks);
};

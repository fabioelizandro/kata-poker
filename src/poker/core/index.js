const handRank = require('./hand-rank');
const rankSort = require('./rank-sort');
const winner = require('./winner');

module.exports = (players) => {
  const ranks = players.map(player => ({ ...handRank(player.cards), ...player }));
  const sortedRanks = rankSort(ranks);
  const [bestRank] = sortedRanks;

  return winner(bestRank, sortedRanks);
};

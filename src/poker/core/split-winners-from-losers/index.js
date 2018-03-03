const rankCompare = require('./rank-compare');
const rankSort = require('./rank-sort');

module.exports = (ranks) => {
  const orderedRank = rankSort(ranks);
  const [bestRank] = orderedRank;

  const isWinner = rank => rankCompare(bestRank, rank) === 0;
  const isLoser = rank => !isWinner(rank);

  const winners = ranks.filter(isWinner);
  const losers = ranks.filter(isLoser);

  return {
    winners,
    losers
  }
};

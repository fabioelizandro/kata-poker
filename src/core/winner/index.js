module.exports = (bestRank, ranks) => {
  const isWinner = rank => rank.level === bestRank.level && rank.score === bestRank.score;
  const isLoser = rank => !isWinner(rank);

  const winners = ranks.filter(isWinner);
  const losers = ranks.filter(isLoser);

  return {
    winners,
    losers
  }
};

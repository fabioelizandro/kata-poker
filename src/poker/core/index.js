const handRank = require('./hand-rank');
const splitWinnersFromLosers = require('./split-winners-from-losers');

module.exports = (players) => {
  const ranks = players.map(player => ({ ...handRank(player.cards), ...player }));
  return splitWinnersFromLosers(ranks);
};

module.exports = (winners) => {
  if (winners.length === 1) {
    const [player] = winners;
    return `Winner: ${player.id} - with ${player.rank}`;
  } else {
    return 'Tie.';
  }
};

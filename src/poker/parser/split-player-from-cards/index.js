module.exports = (playerAndCards) => {
  const [player, cards] = playerAndCards.split(': ');

  return {
    player,
    cards
  };
};

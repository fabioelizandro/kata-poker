module.exports = (cards) => {
  const [fourOfAKind] = cards.fourOfAKind;
  const [remaining] = cards.remaining;

  return [fourOfAKind.number, remaining.number];
};

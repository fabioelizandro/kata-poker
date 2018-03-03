module.exports = (cards) => {
  const sort = numbers => numbers.sort((a, b) => b - a);
  const toNumber = cards => cards.map(card => card.number);

  const [threeOfAKind] = cards.threeOfAKind;
  const remaining = sort(toNumber(cards.remaining));

  return [threeOfAKind.number, ...remaining];
};

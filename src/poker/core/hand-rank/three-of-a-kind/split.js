module.exports = (cards) => {
  const isThreeOfAKind = (card) => cards.filter(({ number }) => number === card.number).length === 3;
  const isNotThreeOfAKind = (card) => !isThreeOfAKind(card);

  return {
    threeOfAKind: cards.filter(isThreeOfAKind),
    remaining: cards.filter(isNotThreeOfAKind)
  };
};

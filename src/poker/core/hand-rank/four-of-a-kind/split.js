module.exports = (cards) => {
  const isFourOfAKind = (card) => cards.filter(({ number }) => number === card.number).length === 4;
  const isNotThreeOfAKind = (card) => !isFourOfAKind(card);

  return {
    fourOfAKind: cards.filter(isFourOfAKind),
    remaining: cards.filter(isNotThreeOfAKind)
  };
};

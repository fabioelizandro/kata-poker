module.exports = (cards) => {
  const isThreeOfAKind = (card) => cards.filter(({ number }) => number === card.number).length === 3;
  const isPair = (card) => cards.filter(({ number }) => number === card.number).length === 2;

  return {
    threeOfAKind: cards.filter(isThreeOfAKind),
    pair: cards.filter(isPair)
  };
};

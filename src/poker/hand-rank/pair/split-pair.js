module.exports = (cards) => {
  const isPair = (card) => cards.filter(({ number }) => number === card.number).length === 2;
  const isNotPair = (card) => !isPair(card);

  return {
    pair: cards.filter(isPair),
    notPair: cards.filter(isNotPair)
  };
};

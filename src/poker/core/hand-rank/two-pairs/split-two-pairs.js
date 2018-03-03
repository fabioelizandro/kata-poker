module.exports = (cards) => {
  const isPair = (card) => cards.filter(({ number }) => number === card.number).length === 2;
  const isNotPair = (card) => !isPair(card);

  const pairs = cards.filter(isPair).reduce((pairs, card) => {
    return {
      ...pairs,
      [card.number]: (pairs[card.number] || []).concat([card])
    }
  }, {})

  return {
    pairs: Object.values(pairs),
    notPair: cards.filter(isNotPair)
  };
};

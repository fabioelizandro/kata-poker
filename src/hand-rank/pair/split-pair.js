module.exports = (cards) => {
  return cards.reduce((splitedCards, card) => {
    const isPair = cards.filter(({ number }) => number === card.number).length === 2;
    const pair = isPair ? splitedCards.pair.concat(card) : splitedCards.pair;
    const notPair = isPair ? splitedCards.notPair : splitedCards.notPair.concat(card);

    return { pair, notPair }
  }, { pair: [], notPair: [] });
};

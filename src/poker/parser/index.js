const cardsParser = require('./cards-parser');
const splitRows = require('./split-rows');
const splitPlayers = require('./split-players');
const splitPlayerFromCards = require('./split-player-from-cards');

module.exports = (input) => {
  const parsePlayerAndCards = playerAndCards => {
    const splited = splitPlayerFromCards(playerAndCards);

    return {
      id: splited.player,
      cards: cardsParser(splited.cards)
    };
  }

  const parseMatch = match => {
    return splitPlayers(match).map(parsePlayerAndCards);
  };

  return splitRows(input).map(parseMatch);
};

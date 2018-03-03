const cardParser = require('./card-parser');

module.exports = (handOfCardsAsString) => {
  const cards = handOfCardsAsString.split(' ');
  return cards.map(cardParser);
};

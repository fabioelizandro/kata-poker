const numberParser = require('./number-parser');
const suitParser = require('./suit-parser');

module.exports = (cardAsString) => {
  const initialCard = {};
  const parsers = [numberParser, suitParser];

  return parsers.reduce((card, parser) => {
    return {
      ...card,
      ...parser(cardAsString)
    }
  }, initialCard);
}

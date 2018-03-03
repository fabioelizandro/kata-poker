const core = require('./core');
const parser = require('./parser');
const serializer = require('./serializer');

module.exports = (match) => {
  const games = parser(match);
  const result = games.map(core);
  const serialized = games.map(core).map(result => serializer(result.winners));

  return serialized.join('\n');
};

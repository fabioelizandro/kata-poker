const core = require('./core');
const parser = require('./parser');
const serializer = require('./serializer');

module.exports = (match) => {
  const games = parser(match);
  const serialized = games.map(core).map(result => serializer(result.winners));

  return serialized.join('\n');
};

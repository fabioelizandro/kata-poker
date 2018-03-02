const ranks = require('./ranks')();

module.exports = (cards) => {
  const rank = [...ranks].reverse().find(rank => rank(cards));

  return {
    ...rank(cards),
    level: ranks.indexOf(rank)
  }
};

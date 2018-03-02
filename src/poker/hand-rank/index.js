const highCard = require('./high-card');
const pair = require('./pair');

module.exports = (cards) => {
  const ranks = [highCard, pair];
  const rank = [...ranks].reverse().find(rank => rank(cards));

  return {
    ...rank(cards),
    level: ranks.indexOf(rank)
  }
};

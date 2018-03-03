const highCard = require('./high-card');
const pair = require('./pair');
const twoPairs = require('./two-pairs')

module.exports = () => {
  return [
    highCard,
    pair,
    twoPairs
  ];
};

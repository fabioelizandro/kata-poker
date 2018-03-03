const highCard = require('./high-card');
const pair = require('./pair');
const twoPairs = require('./two-pairs')
const threeOfAKind = require('./three-of-a-kind');

module.exports = () => {
  return [
    highCard,
    pair,
    twoPairs,
    threeOfAKind
  ];
};

const highCard = require('./high-card');
const pair = require('./pair');
const twoPairs = require('./two-pairs')
const threeOfAKind = require('./three-of-a-kind');
const straight = require('./straight');
const flush = require('./flush');
const fullHouse = require('./full-house');

module.exports = () => {
  return [
    highCard,
    pair,
    twoPairs,
    threeOfAKind,
    straight,
    flush,
    fullHouse
  ];
};

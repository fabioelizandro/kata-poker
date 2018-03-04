const highCard = require('./high-card');
const pair = require('./pair');
const twoPairs = require('./two-pairs')
const threeOfAKind = require('./three-of-a-kind');
const straight = require('./straight');
const flush = require('./flush');
const fullHouse = require('./full-house');
const fourOfAKind = require('./four-of-a-kind');
const straightFlush = require('./straight-flush');

module.exports = () => {
  return [
    highCard,
    pair,
    twoPairs,
    threeOfAKind,
    straight,
    flush,
    fullHouse,
    fourOfAKind,
    straightFlush
  ];
};

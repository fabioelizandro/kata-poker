const highCard = require('./high-card');
const pair = require('./pair');

module.exports = () => {
  return [
    highCard,
    pair
  ];
};

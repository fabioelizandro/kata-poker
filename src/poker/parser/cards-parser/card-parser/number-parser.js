const numberMap = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14
};

module.exports = cardAsString => {
  const [numberAsString] = cardAsString.match(/(\d0?|J|Q|K|A)/);
  return { number: numberMap[numberAsString] };
};

const poker = require('./poker');

const [nodePath, scriptPath, pokerInput] = process.argv;

console.log(poker(pokerInput));

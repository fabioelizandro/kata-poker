module.exports = (rows) => {
  const trim = line => line.trim();
  const notBlank = line => line !== '';
  return rows.split('\n').map(trim).filter(notBlank);
};

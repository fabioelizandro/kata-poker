const isSequencial = (list, index = 0) => {
  const isLast = index === list.length - 1;

  if (isLast) {
    return true;
  } else {
    const a = list[index];
    const b = list[index + 1];
    const seq = b - 1 === a;

    return seq && isSequencial(list, index + 1);
  }
};

module.exports = (list) => {
  return isSequencial(list.sort((a, b) => a - b));
};

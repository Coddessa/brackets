module.exports = function check(str, bracketsConfig) {
  const x = [];
  const a = {};
  const b = {};

  bracketsConfig.forEach(([c, d]) => {
    a[c] = d;
    b[d] = c;
  });

  for (let i of str) {
    if (a[i]) {
      if (i === a[i] && x.length > 0 && x[x.length - 1] === i) {
        x.pop();
      } else {
        x.push(i);
      }
    } else if (b[i]) {
      if (x.length === 0 || x.pop() !== b[i]) {
        return false;
      }
    }
  }

  return x.length === 0;
};

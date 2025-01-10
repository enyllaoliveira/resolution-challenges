function Sum(i) {
  let sumNumbers = 0;
  for (let j = 1; j <= i; j++) {
    sumNumbers += j;
  }
  return sumNumbers;
}
module.exports = Sum;

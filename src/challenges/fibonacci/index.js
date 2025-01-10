function Fibonacci(n) {
  let a = 0,
    b = 1;

  while (b <= n) {
    if (b === n) return true;
    const nextNumber = a + b;
    a = b;
    b = nextNumber;
  }

  return false;
}

module.exports = Fibonacci;

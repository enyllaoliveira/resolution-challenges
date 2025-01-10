const Fibonacci = require("./index.js");

test("should check if 8 belongs to the Fibonacci sequence", () => {
  expect(Fibonacci(8)).toBe(true);
});

test("should check if 10 does not belong to the Fibonacci sequence", () => {
  expect(Fibonacci(10)).toBe(false);
});

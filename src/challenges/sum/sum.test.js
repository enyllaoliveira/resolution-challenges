const Sum = require("./index.js");

test("should return the calculation of the sum of 1 to 13", () => {
  expect(Sum(13)).toBe(91);
});

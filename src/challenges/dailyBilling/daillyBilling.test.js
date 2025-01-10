const daillyBilling = require("./index.js");

test("should calculate the daily billing", () => {
  const data = [10, 20, 0, 40, 0, 0, 50, 0, 30, 0, 0, 25];
  const result = daillyBilling(data);

  expect(result.minValue).toBe(10);
  expect(result.maxValue).toBe(50);
  expect(result.daysAboveAverage).toBe(3);
});

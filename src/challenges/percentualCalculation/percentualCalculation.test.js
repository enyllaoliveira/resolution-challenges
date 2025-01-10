const percentual = require("./index.js");

test("should calculate the percentage of each state", () => {
  const billing = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Others: 19849.53,
  };

  const result = percentual(billing);

  expect(result.SP).toBeCloseTo(37.53, 2);
  expect(result.RJ).toBeCloseTo(20.29, 2);
  expect(result.MG).toBeCloseTo(16.17, 2);
  expect(result.ES).toBeCloseTo(15.03, 2);
  expect(result.Others).toBeCloseTo(10.96, 1);
});

const reverseString = require("./index.js");

test("should should reverse the string 'hello'", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("should reverse the string 'Olleh'", () => {
  expect(reverseString("Olleh")).toBe("hellO");
});

test("must reverse an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("should reverse a string with a single character", () => {
  expect(reverseString("a")).toBe("a");
});

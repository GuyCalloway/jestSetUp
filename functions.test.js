const functions = require("./functions.js");

test("adds 2+2 to Equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("isNull function returns isNull", () => {
  expect(functions.isNull()).toBe(null);
});

test("value check 4 to be 4", () => {
  expect(functions.checkValue(4)).toBe(4);
});

test("knows if falsy value passed", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});
// toEqual compares objects arrays etc... toBe would fail here

test("returns user name Guy Calloway Object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Guy",
    lastName: "Calloway"
  });
});

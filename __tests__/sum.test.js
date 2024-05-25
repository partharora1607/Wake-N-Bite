import sum from "../sum";

test("Sum function should calculate sum of 2 functions", () => {
  const res = sum(3, 4);

  // Assertion
  expect(res).toBe(7);
});

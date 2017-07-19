const Vector = require('./Vector');

it('adds', () => {
  expect(Vector([1, 2, 3]).add(Vector([4, 5, 6])).val).toEqual([5, 7, 9]);
});

it('subtracts', () => {
  expect(Vector([1, 2, 3]).minus(Vector([1, 2, 3])).val).toEqual([0, 0, 0]);
});

it('multiplies', () => {
  expect(Vector([1, 2, 3]).times(2).val).toEqual([2, 4, 6]);
});

it('calculates magnitude', () => {
  expect(Vector([-1, 1, 1]).magnitude()).toBeCloseTo(Math.sqrt(3));
});

it('calculates unit vector', () => {
  expect(Vector.unitVector(Vector([-1, 1, 1])).magnitude()).toBe(1);
});

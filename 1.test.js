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

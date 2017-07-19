const Vector = xs => ({
  val: xs,
  add: ({ val: ys }) => Vector(xs.map((x, i) => x + ys[i])),
  minus: ({ val: ys }) => Vector(xs.map((x, i) => x - ys[i])),
  times: a => Vector(xs.map(x => x * a)),
  magnitude: () => Math.sqrt(
    xs.reduce((acc, val) => acc + (val * val), 0)
  ),
  inspect: () => `Vector: ${xs}`,
  value: () => xs,
});

Vector.unitVector = v =>
  v.times(1 / v.magnitude())

module.exports = Vector;

const Vector = xs => ({
  val: xs,
  add: ({ val: ys }) => Vector(xs.map((x, i) => x + ys[i])),
  minus: ({ val: ys }) => Vector(xs.map((x, i) => x - ys[i])),
  times: a => Vector(xs.map(x => x * a)),
  inspect: () => `Vector: ${xs}`,
  value: () => xs,
});

module.exports = Vector;

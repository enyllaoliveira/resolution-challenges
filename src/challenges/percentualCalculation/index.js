function percentual(billing) {
  const total = Object.values(billing).reduce((a, b) => a + b, 0);
  return Object.fromEntries(
    Object.entries(billing).map(([state, value]) => [
      state,
      parseFloat(((value / total) * 100).toFixed(2)),
    ])
  );
}
module.exports = percentual;

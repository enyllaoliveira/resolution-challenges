function DaillyBilling(billing) {
  const validValues = billing.filter((day) => day > 0);

  if (validValues.length === 0) {
    return { minValue: null, maxValue: null, daysAboveAverage: 0 };
  }

  const minValue = Math.min(...validValues);
  const maxValue = Math.max(...validValues);

  const total = validValues.reduce((sum, value) => sum + value, 0);
  const averageValue = total / validValues.length;

  const daysAboveAverage = validValues.filter(
    (day) => day > averageValue
  ).length;

  return { minValue, maxValue, daysAboveAverage };
}

module.exports = DaillyBilling;

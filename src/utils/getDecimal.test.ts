import getDecimal from 'utils/getDecimal';

describe('getDecimal function', () => {
  test('should return fraction of number', () => {
    expect(getDecimal(12.1233256)).toBe(0.1233256);
    expect(getDecimal(0.1)).toBe(0.1);
    expect(getDecimal(12)).toBe(0);
    expect(getDecimal(-0.32153)).toBe(-0.32153);
    expect(getDecimal(-12.65411)).toBe(-0.65411);
  });
});

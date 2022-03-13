import roundNumberTo from 'utils/roundNumberTo';

describe('roundNumberTo function', () => {
  test('should round number to 3 signs', () => {
    expect(roundNumberTo(12.1233256, 3)).toBe(12.123);
    expect(roundNumberTo(0.356968, 3)).toBe(0.357);
    expect(roundNumberTo(-1.1515521, 3)).toBe(-1.152);
    expect(roundNumberTo(-0.35135, 3)).toBe(-0.351);
  });
  test('should round number to 0 signs', () => {
    expect(roundNumberTo(12.1233256, 0)).toBe(12);
    expect(roundNumberTo(0.356968, 0)).toBe(0);
    expect(roundNumberTo(0.656968, 0)).toBe(1);
    expect(roundNumberTo(-0.356968, 0)).toBe(0);
    expect(roundNumberTo(-0.656968, 0)).toBe(-1);
  });
});

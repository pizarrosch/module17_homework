import getPercents from "../Task2";

describe('A test', () => {
  it('should get a share of a number using percentage', () => {
    expect(getPercents(30, 200)).toBe(60)
  });
})
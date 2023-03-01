import getPercents from "../Task2";

describe('A test', () => {
  it('should get a share of a number using percentage', () => {
    expect(getPercents(30, 200)).toBe(60)
  });

  it('should throw error if percentage value is under 1', () => {
    expect(getPercents(0, 200)).toBe('Please enter a number more or equal 1')
  });

  it('should throw error if percentage value is over 100', () => {
    expect(getPercents(101, 200)).toBe('Please enter a number less or equal 100')
  });

  it('should get a share of a number using percentage beginning from 1', () => {
    expect(getPercents(1, 200)).toBe(2)
  });

  it('should get a share of a number using percentage ending with 100', () => {
    expect(getPercents(100, 200)).toBe(200)
  });
})
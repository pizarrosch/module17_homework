import reverseWord from "../Task1";

describe('function', () => {
  it('should reverse the word', () => {
    expect(reverseWord('Hello')).toBe('olleH');
  })
})
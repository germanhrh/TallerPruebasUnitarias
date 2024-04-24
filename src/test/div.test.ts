import { div } from '../div'

describe('verify that the div are working correct', () => {
  it('It should return a correct division', () => {
    expect(div(2, 2)).toBe(1)
  });

  it('should throw an error when to dividing by zero', () => {
    expect(() => {
      div(2, 0);
    }).toThrow(Error);
  });
})
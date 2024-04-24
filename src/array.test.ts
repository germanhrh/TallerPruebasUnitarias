import { arrayContainsValue, arrayNotContainsValue } from './array';

describe('arrayContainsValue', () => {
  it('should return true if the array contains the specified value', () => {
    const arr = [1, 2, 3, 4, 5];
    const value = 3;
    expect(arrayContainsValue(arr, value)).toBe(true);
  });

  it('should return false if the array does not contain the specified value', () => {
    const arr = [1, 2, 3, 4, 5];
    const value = 6;
    expect(arrayContainsValue(arr, value)).toBe(false);
  });
});

describe('arrayNotContainsValue', () => {
  it('should return false if the array contains the specified value', () => {
    const arr = [1, 2, 3, 4, 5];
    const value = 3;
    expect(arrayNotContainsValue(arr, value)).toBe(false);
  });

  it('should return true if the array does not contain the specified value', () => {
    const arr = [1, 2, 3, 4, 5];
    const value = 6;
    expect(arrayNotContainsValue(arr, value)).toBe(true);
  });
});

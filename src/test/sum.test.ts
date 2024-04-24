import * as sumModule from '../sum'; 

describe('verify sum', () => {
  it('should be greater than 10', () => {
    expect(sumModule.sum(6, 5)).toBeGreaterThan(10);
  });

  it('should be greater than or equal to 20', () => {
    expect(sumModule.sum(10, 10)).toBeGreaterThanOrEqual(20);
  });

  it('should be less than or equal to 8', () => {
    expect(sumModule.sum(4, 4)).toBeLessThanOrEqual(8);
  });

  it('should be less than 12', () => {
    expect(sumModule.sum(5, 6)).toBeLessThan(12);
  });

  it('should be equal to 9', () => {
    expect(sumModule.sum(5, 4)).toBe(9);
  });
});

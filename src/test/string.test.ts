import * as strings from '../string';

describe('strings', () => {
  it('should contain "UN"', () => {
    expect(strings.anything).toMatch(/UN/);
  });

  it('should not contain "P"', () => {
    expect(strings.anything).not.toMatch(/P/);
  });

  it('should contain the letter "n"', () => {
    expect(strings.anything1).toMatch(/n/i);
  });
});

import { arrayContainsValue, arrayNotContainsValue} from '../array'

describe('verify that the functions are working properly', () => {

  const data = ['value2', 'value1', 'value3' /*,'UNAC'*/];

  it('should return true, if content the value1', () => {
    expect(arrayContainsValue(data, 'value1')).toBe(true);
  });

  it('should return true, if content the value3', () => {
    expect(arrayContainsValue(data, 'value3')).toBe(true);
  });

  it("should return false, don't have value UNAC", () => {
    expect(arrayNotContainsValue(data, 'UNAC')).toBe(true)
  })
});



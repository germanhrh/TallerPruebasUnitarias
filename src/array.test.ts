import { arrayContainsValue, arrayNotContainsValue } from './array';

describe('arrayContainsValue', () => {
  it('verdadero si el array contiene el valor value1', () => {
    const array = ['value1', 'value2', 'value3'];
    const validad = 'value1';
    expect(arrayContainsValue(array, validad)).toBe(true);
  });

  it('verdadero si el array contiene el valor value', () => {
    const array = ['value1', 'value2', 'value3'];
    const validar = 'value3';
    expect(arrayContainsValue(array, validar)).toBe(true);
  });
});

describe('arrayNotContainsValue', () => {
  it('falso si el array no contiene el valor UNAC', () => {
    const arr = ['SENA', 'UDEA', 'UNAD'];
    const value = 'UNAC';
    expect(arrayNotContainsValue(arr, value)).toBe(true);
  });
});

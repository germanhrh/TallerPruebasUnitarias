import { arrayContainsValue, arrayNotContainsValue } from "../array";

describe('Array test', () => {
  test('Deberia devolver true si el array contiiene el valor: value1', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value1';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });

  test('Deberia devolver true si el array contiiene el valor: value3', () => {
    const arr = ['value1', 'value2', 'value3', 'value4', 'value5'];
    const value = 'value3';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });
});
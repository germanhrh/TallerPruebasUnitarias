import { n, number, notTrue, notFalse } from './multi';

describe('Pruebas para multi.ts', () => {
  test('1. Debería verificar que "n" es null', () => {
    expect(n).toBeNull();
  });

  test('2. Debería verificar que "n" está definido (no es undefined)', () => {
    expect(n).toBeDefined();
  });

  test('3. Debería verificar que "number" es igual a 0', () => {
    expect(number).toBe(0);
  });

  test('4. Debería verificar que "notTrue" es false', () => {
    expect(notTrue).toBe(false);
  });

  test('5. Debería verificar que "notFalse" es true', () => {
    expect(notFalse).toBe(true);
  });
});

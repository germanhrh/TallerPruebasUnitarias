import { sum } from './sum';

describe('sum.ts', () => {
    test('Probar que una suma de dos valores es mayor a 10', () => {
        expect(sum(6, 5)).toBeGreaterThan(10);
    });

    test('Probar que una suma de dos valores es mayor o igual a 20', () => {
        expect(sum(10, 10)).toBeGreaterThanOrEqual(20);
    });

    test('Probar que una suma de dos valores es menor o igual a 8', () => {
        expect(sum(3, 5)).toBeLessThanOrEqual(8);
    });

    test('Probar que una suma de dos valores es menor a 12', () => {
        expect(sum(5, 5)).toBeLessThan(12);
    });

    test('Probar que una suma de dos valores es igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
});

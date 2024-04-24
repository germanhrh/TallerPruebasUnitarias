import { anything, anything1 } from './string';

describe('string.ts', () => {
    test('Probar que \'anything\' contiene "UN"', () => {
        expect(anything).toContain("UN");
    });

    test('Probar que \'anything\' no contiene "P"', () => {
        expect(anything).not.toContain("P");
    });

    test('Probar que \'anything1\' contiene la letra \'n\'', () => {
        expect(anything1).toMatch(/n/i);
    });
});

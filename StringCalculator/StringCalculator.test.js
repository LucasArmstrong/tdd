const StringCalculator = require('./StringCalculator');

describe ('Test if string calculator can add numbers', () => {
    test ('take numbers separated by delimeters, return their sum', () => {
        expect(StringCalculator('')).toBe(0);
        expect(StringCalculator('1')).toBe(1);
        expect(StringCalculator('1,2')).toBe(3);
        expect(StringCalculator('1,2,3')).toBe(6);
        expect(StringCalculator('11,22')).toBe(33);
        expect(StringCalculator('abc')).toBe(0);
        expect(StringCalculator('a')).toBe(0);
        expect(StringCalculator('a,b,c')).toBe(0);
        expect(StringCalculator('11,22,3,4,5,,,,')).toBe(45);
        expect(StringCalculator('0,1,1.3,4,5,6,10000')).toBe(10017.3);

        expect(StringCalculator('0.1')).toBe(0.1);
        expect(StringCalculator('-1')).toBe(-1);
        expect(StringCalculator('-1,-2')).toBe(-3);

        expect(StringCalculator('1\n')).toBe(1);
        expect(StringCalculator('1\n2')).toBe(3);
        expect(StringCalculator('1\n2,3')).toBe(6);

        //todo: add support for additional delimeters
    });
})
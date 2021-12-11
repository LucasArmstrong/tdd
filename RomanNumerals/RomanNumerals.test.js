const {Romanize, DeRomanize} = require('./RomanNumerals');

describe ('Convert numbers and roman numerals back and forth', () => {
    test ('Convert numbers to roman numerals', () => {
        expect(Romanize('string')).toBe(NaN);
        expect(Romanize(1)).toBe('I');
        expect(Romanize(500)).toBe('D');
        expect(Romanize(50055)).toBe('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMLV');
        expect(Romanize(1004)).toBe('MIV');
        expect(Romanize(2175)).toBe('MMCLXXV');
        expect(Romanize(3999)).toBe('MMMCMXCIX');
        expect(Romanize(99789)).toBe('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMDCCLXXXIX');
    });

    test ('Convert roman numerals to numbers', () => {
        expect(DeRomanize('I')).toBe(1);
        expect(DeRomanize('D')).toBe(500);
        expect(DeRomanize('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMLV')).toBe(50055);
        expect(DeRomanize('MIV')).toBe(1004);
        expect(DeRomanize('MCDXLIV')).toBe(1444);
        expect(DeRomanize('MMXVIII')).toBe(2018);
        expect(DeRomanize('MMCLXXV')).toBe(2175);
        expect(DeRomanize('MMMCMXCIX')).toBe(3999);
    });
})
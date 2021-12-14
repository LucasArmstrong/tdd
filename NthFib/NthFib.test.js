const {NthFib, IsFib} = require('./NthFib');

describe ('Finds correct nth fibonacci number', () => {
    test ('take number and return correct nth in fib sequence', () => {
        expect(NthFib(1)).toBe(0);
        expect(NthFib(2)).toBe(1);
        expect(NthFib(3)).toBe(1);
        expect(NthFib(4)).toBe(2);
        expect(NthFib(9)).toBe(21);
        expect(NthFib(12)).toBe(89);
        expect(NthFib(21)).toBe(6765);
        expect(NthFib(22)).toBe(10946);
        expect(NthFib(100)).toBe(218922995834555200000);
        expect(NthFib(200)).toBe(1.7340252117279783e+41);
        expect(NthFib(1000)).toBe(2.686381002448534e+208);
    });
})

describe ('Determines if number is part of fib sequence', () => {
    test ('Test if number is included in the fib sequence', () => {
        expect(IsFib(1)).toBe(2);
        expect(IsFib(11)).toBeFalsy();
        expect(IsFib(354224848179262000000)).toBe(101);
        expect(IsFib(43466557686937430000000000000000000000000000000000000000000)).toBeFalsy();
    });
})
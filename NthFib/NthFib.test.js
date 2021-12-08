const {NthFib, IsFib} = require('./NthFib');

describe ('Finds correct nth fibonacci number', () => {
    test ('take number and return correct nth in fib sequence', () => {
        expect(NthFib(1)).toBe(1);
        expect(NthFib(0)).toBe(0);
        expect(NthFib(9)).toBe(34);
        expect(NthFib(12)).toBe(144);
        expect(NthFib(22)).toBe(17711);
        expect(NthFib(100)).toBe(354224848179262000000);
        expect(NthFib(200)).toBe(2.8057117299251016e+41);
        expect(NthFib(1000)).toBe(4.346655768693743e+208);
    });
})

describe ('Determines if number is part of fib sequence', () => {
    test ('Test if number is included in the fib sequence', () => {
        expect(IsFib(1)).toBe(1);
        expect(IsFib(11)).toBeFalsy();
        expect(IsFib(354224848179262000000)).toBe(100);
        expect(IsFib(43466557686937430000000000000000000000000000000000000000000)).toBeFalsy();
    });
})
const {MaxPrime, IsPrime} = require('./Primes');

describe ('Finds prime numbers', () => {
    test ('Determine if a number is prime', () => {
        expect(IsPrime(1)).toBeFalsy();
        expect(IsPrime(2)).toBeTruthy();
        expect(IsPrime(7919)).toBeTruthy();
        
    });
    test ('Find the max prime equal to or less than N', () => {
        expect(MaxPrime(1)).toBe(0);
        expect(MaxPrime(2)).toBe(2);
        expect(MaxPrime(7919)).toBe(7919);
        
        expect(MaxPrime(79197)).toBe(79193);
        //expect(MaxPrime(791971)).toBe(791971);
        //expect(MaxPrime(991971)).toBe(791971);
    });
})
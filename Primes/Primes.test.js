const {MaxPrime, IsPrime, IsPrimeTriplet, AreTwinPrimes} = require('./Primes');

describe ('Finds prime numbers', () => {
    test ('Determine if a number is prime', () => {
        expect(IsPrime(1)).toBeFalsy();
        expect(IsPrime(2)).toBeTruthy();
        expect(IsPrime(23)).toBeTruthy();
        expect(IsPrime(24)).toBeFalsy();
        expect(IsPrime(7919)).toBeTruthy();
        
    });
    test ('Find the max prime equal to or less than N', () => {
        expect(MaxPrime(1)).toBe(0);
        expect(MaxPrime(1)).toBeFalsy();
        expect(MaxPrime(2)).toBe(2);
        expect(MaxPrime(24)).toBe(23);
        expect(MaxPrime(7919)).toBe(7919);
        expect(MaxPrime(79197)).toBe(79193);
        //expect(MaxPrime(791971)).toBe(791971);
        //expect(MaxPrime(991971)).toBe(791971);
    });
    test ('Find Prime triplets, Where (p, p+2, p+6) or (p, p+4, p+6) are all prime.', () => {
        expect(IsPrimeTriplet([])).toBeFalsy();
        expect(IsPrimeTriplet([1])).toBeFalsy();
        expect(IsPrimeTriplet([1,2])).toBeFalsy();
        expect(IsPrimeTriplet([1,2,3])).toBeFalsy();
        expect(IsPrimeTriplet([5,7,11])).toBeTruthy();
        expect(IsPrimeTriplet([5,7,11,0])).toBeFalsy();
        expect(IsPrimeTriplet([2,5,7,11])).toBeFalsy();
        expect(IsPrimeTriplet([277,281,283])).toBeTruthy();
    });
    test ('Find Twin primes, Where (p, p+2) are all prime.', () => {
        expect(AreTwinPrimes([])).toBeFalsy();
        expect(AreTwinPrimes([1])).toBeFalsy();
        expect(AreTwinPrimes([1,2])).toBeFalsy();
        expect(AreTwinPrimes([1,2,3])).toBeFalsy();
        expect(AreTwinPrimes([2,3])).toBeFalsy();
        expect(AreTwinPrimes([5,7])).toBeTruthy();
        expect(AreTwinPrimes([7,11])).toBeFalsy();
        expect(AreTwinPrimes([11,281,283])).toBeFalsy();
        expect(AreTwinPrimes([11,13])).toBeTruthy();
    });
})
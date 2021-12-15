function MaxPrime(n) {
    let greatestPrime = 0;
    for (let i = 0; i <= n; i++) {
        if (IsPrime(i) && i > greatestPrime) {
            greatestPrime = i;
        }
    }
    //console.log('greatestPrime', n, greatestPrime);
    return greatestPrime;
}

function IsPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return (n > 1);
}

function IsPrimeTriplet(a) {
    if (a.length !== 3 || !IsPrime(a[0])) {
        return false;
    }
    return (a[1] === a[0]+2 && a[2] === a[0]+6) || 
            (a[1] === a[0]+4 && a[2] === a[0]+6);
}

function AreTwinPrimes(a) {
    if (a.length !== 2 || !IsPrime(a[0])) {
        return false;
    }
    return (a[1] === a[0]+2);
}

module.exports.MaxPrime = MaxPrime;
module.exports.IsPrime = IsPrime;
module.exports.IsPrimeTriplet = IsPrimeTriplet;
module.exports.AreTwinPrimes = AreTwinPrimes;
function MaxPrime(n) {
    let greatestPrime = 0;
    for (let i = 0; i <= n; i++) {
        if (IsPrime(i) && i > greatestPrime) {
            greatestPrime = i;
        }
    }
    //console.log('greatestPrime', greatestPrime);
    return greatestPrime;
}

function IsPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return (n > 1);
}

module.exports.MaxPrime = MaxPrime;
module.exports.IsPrime = IsPrime;
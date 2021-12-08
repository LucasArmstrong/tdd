const fibs = {};
function NthFib(n) {
    if (n <= 1) {
        return n;
    }

    if (fibs[n]) {
        return fibs[n];
    }
    const fib = NthFib(n-1) + NthFib(n-2);
    fibs[n] = fib;
    return fib;
}

function IsFib(number) {
    let nth = 0;
    let fib = NthFib(nth);
    while (fib <= number) {
        if (fib === number) {
            return nth;
        }
        nth = nth + 1;
        fib = NthFib(nth);
    }
    return false;
}

module.exports.NthFib = NthFib;
module.exports.IsFib = IsFib;
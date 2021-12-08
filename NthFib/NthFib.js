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

module.exports = NthFib;
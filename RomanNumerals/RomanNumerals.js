const romanKeys = { 
    M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1
};

function Romanize (num) {
    if (isNaN(num)) {
        return NaN;
    }
    let roman = '';
    let i = '';
    for (i in romanKeys) {
        while (num >= romanKeys[i]) {
            roman += i;
            num -= romanKeys[i];
        }
    }
    return roman;
}

function DeRomanize (romanString) {
    const romans = romanString.split('');
    let num = 0;
    while (romans.length) {
        if (romans.length > 1) {
            const double = romans[romans.length-2] + romans[romans.length-1];
            if (double in romanKeys) {
                num += romanKeys[double];
                romans.splice(-2);
            } else {
                num += romanKeys[romans.pop()];
            }
        } else {
            num += romanKeys[romans.pop()];
        }
    }
    return num;
}

module.exports.Romanize = Romanize;
module.exports.DeRomanize = DeRomanize;
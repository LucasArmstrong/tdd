// input '', '1','1,2','1\n2'
function StringCalculator(numberString) {
    if (!numberString) {
        return 0;
    }

    if (numberString.length == 1) {
        const number = parseInt(numberString);
        if (isNaN(number)) { 
            return 0;
        }
        return number;
    }

    const reduced = numberString.replace(/[\n]/i,',').split(',')
        .map((number) => {
            if (number) {
                return number.indexOf('.') !== -1 ? parseFloat(number)
                    : parseInt(number);
            }
            return 0;
        })
        .reduce((prevNum, currentNum) => prevNum + currentNum);
    console.log('reduced', reduced)
    
    if (isNaN(reduced)) { 
        return 0;
    }
    return reduced;
}

module.exports = StringCalculator;
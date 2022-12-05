const sumAll = function(a, b) {
    if (a < b) {
        smallerNumber = a;
        biggerNumber = b;
    } else if (b < a) {
        biggerNumber = a;
        smallerNumber = b;
    }

    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR"
    } if (a < 0 || b < 0) {
        return "ERROR"
    }

    total = 0
    for (i = smallerNumber; i <= biggerNumber; i++) {
        total += i
    }

    return total
};

// Do not edit below this line
module.exports = sumAll;

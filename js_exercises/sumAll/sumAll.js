const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    } else {
        let lowEnd = a;
        let highEnd = b;
        if (a > b) {
            lowEnd = b;
            highEnd = a;
        }
        let arr = [];
        for (let i = lowEnd; i <= highEnd; i++) {
            arr.push(i);
        }
        return arr.reduce((total, amount) => total + amount);
    }

}

module.exports = sumAll

const repeatString = function(str, reps) {
    if (reps < 0) {
        return 'ERROR';
    } else {
        let newStr = "";
        for (i = 0; i < reps; i++) {
            newStr = newStr + str;
        }
        return newStr
    }
}

module.exports = repeatString

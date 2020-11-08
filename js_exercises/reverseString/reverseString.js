const reverseString = function(str) {
    let x = str.length - 1;
    let revStr = "";
    for (let i = x; i > -1; i--) {
        revStr = revStr + str[i];
    }
    return revStr;
}

module.exports = reverseString

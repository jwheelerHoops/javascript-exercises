const repeatString = function(string, num) {
    let result = ""
    if (num >= 0) {
        for (i = 1; i <= num; i++) {
            result = result + string
        }
    } else {
        result = "ERROR"
    }

    return result
};

// Do not edit below this line
module.exports = repeatString;

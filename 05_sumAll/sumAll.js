const sumAll = function(inp1, inp2) {
    let sum = 0;

    if (inp1 < 0 || inp2 < 0) return "ERROR";
    if (!Number.isInteger(inp1) || !Number.isInteger(inp2)) return "ERROR";
    if (inp1 > inp2) [inp1, inp2] = [inp2, inp1];

    for (i = inp1; i <= inp2; i++) {
        sum += i;
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

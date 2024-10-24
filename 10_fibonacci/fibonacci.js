const fibonacci = function(value) {
    let n = parseInt(value)
    if (n < 0) return "OOPS";

    let fibSeq = [0, 1];

    for (i = 0; i < value; i++) {
        fibSeq.push((fibSeq[i] + fibSeq[i + 1]))
    }

    return fibSeq[value]
};

// Do not edit below this line
module.exports = fibonacci;

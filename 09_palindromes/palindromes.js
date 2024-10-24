const palindromes = function (string) {
    let original = string.replace(/[!?,.\s]/g, "").toLowerCase();
    let reversed = original.split("").toReversed().join("");

    return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;

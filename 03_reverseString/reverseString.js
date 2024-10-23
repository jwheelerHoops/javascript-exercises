const reverseString = function(string) {
    let array = string.split("");
    let reversed = array.toReversed();
    let newString = reversed.join("");
    
    return newString;
};

// Do not edit below this line
module.exports = reverseString;

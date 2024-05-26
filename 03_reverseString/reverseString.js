const reverseString = function(string) {
    let reversedString = "";
    index = string.length - 1;
    while (index >= 0) {
        reversedString += string.at(index);
        index--;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

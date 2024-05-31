const palindromes = function (string) {
    let newString = string.toLowerCase();
    newString = newString.replace(/[^\w\']|_/g, "");
    // replaces anything that isn't a character with an empty string

    if (newString.length <= 1) {
        return true;
    }
    else if (newString.at(0) === newString.at(newString.length-1)) {
        return palindromes(newString.slice(1, newString.length-1));
    }
    return false;
};

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;

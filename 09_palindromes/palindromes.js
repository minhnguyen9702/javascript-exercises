const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/\W|_/g, '');
    if (string.length == 0 || string.length == 1) {
        return true
    } if (string[0] == string[string.length - 1]) {
        string = string.slice(1, -1)
        return palindromes(string)
    } else if (string[0] != string[string.length - 1]) {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;

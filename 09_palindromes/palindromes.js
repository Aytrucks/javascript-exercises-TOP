const palindromes = function (original) {
    let alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789";

    function clean(string){
        return string
        .toLowerCase()
        .split("")
        .filter((char) => alphaNum.includes(char))
        .join("");
    }

    
    return clean(original) === clean(original).split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

const palindromes = function (original) {
    let newStr = "";

    function isAlnum(string){
        let code = 0;
        let newStr = "";
        for(let i = 0;i < string.length;i++){
            code = string.charCodeAt(i);
            if((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)){
                newStr += string[i];
            }
        }
        return newStr;
    }
    let original2 = isAlnum(original);
    for(let i = original2.length - 1;i >= 0;i--){
        newStr += original2[i];
    }
    return newStr.toLowerCase() === original2.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;

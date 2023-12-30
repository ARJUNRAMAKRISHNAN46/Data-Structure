function letterCase(str) {
    let result = '';

    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(char >= 'a' && char <= 'z') {
            result += String.fromCharCode(char.charCodeAt(0) - 32);
        } else if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode(char.charCodeAt(0) + 32);
        } else {
            result += char;
        }
    }
    return result;
}

console.log(letterCase('HellO'));
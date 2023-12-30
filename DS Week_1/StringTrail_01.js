class Encryptor {
  constructor(str, key) {
    this.str = str;
    this.key = key;
  }

  encryptString() {
    let result = "";
    for (let i = 0; i < this.str.length; i++) {
      let char = this.str[i];

      if (char >= "a" && char <= "z") {
        let pos = char.charCodeAt(0) + this.key;
        if (pos > 122) {
          pos = (pos % 122) + 96;
        }
        result += String.fromCharCode(pos)
      } else if (char >= 'A' && char <= 'Z') {
        let pos = char.charCodeAt(0) + this.key;
        if(pos > 90) {
            pos = (pos%90) + 67;
        }
        result += String.fromCharCode(pos);
      } else {
        result += char;
      }
    }
    return result;
  }
}

const enc = new Encryptor("Arjun", 3);
const encryptedString = enc.encryptString();
console.log(encryptedString);

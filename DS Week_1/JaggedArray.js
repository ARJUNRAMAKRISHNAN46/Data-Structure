const lengthArray = [2,6,1,4];
const row = 4;
const jaggedArray = [];
let value = 4;
for(let i = 0; i < row; i++) {
    const innerArray = [];
    const length = lengthArray[i];
    for(let j = 0; j < length; j++) {
        value += 3;
        innerArray.push(value);
    }
    jaggedArray.push(innerArray);
}
console.log(jaggedArray);
let arr = [2, 5, 7, 9, 4, 6, 0];
let target = 10;
let out = [];

function findElement(arr, target) {
    let nums = new Set();
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let match = target - num;
        if (nums.has(match)) {
            out.push(num);
            out.push(match);
        }
        nums.add(num);
    }
    return out;
}

let output = findElement(arr, target);

for (let k = 0; k < output.length; k++) {
    console.log(output[k]);
}
//Expected output [6,4]
let arr = [6, 2, 5, 6, 9, 4, 6, 0, 6];
let target = 6;
function moveTargetToEnd(arr, target) {
  let temp = 0;
  for (i = 0; i < arr.length/2; i++) {
    for (j = arr.length - 1; j > arr.length / 2; j--) {
      if (arr[i] == target && arr[j] !== target) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
let output = moveTargetToEnd(arr, target);
console.log(output);
//Expected output [0,2,5,4,9,6,6,6,6]

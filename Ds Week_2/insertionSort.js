// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       console.log(j);
//       j = j - 1;
//     }
//     arr[j + 1] = numberToInsert;
//   }
//   return arr;
// }

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {  
    let key = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
}

const arr = [4, 7, 5, 2, -3, -1];
console.log(insertionSort(arr));

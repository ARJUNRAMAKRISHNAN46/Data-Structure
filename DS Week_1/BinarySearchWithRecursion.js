function binarySearchWithRecursion(arr, target, start = 0, end = arr.length) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (target > arr[mid]) {
    return binarySearchWithRecursion(arr, target, mid + 1, end);
  } else {
    return binarySearchWithRecursion(arr, target, start, mid - 1);
  }
}


const arr = [10,20,30,40,50,60,70];
const target = 150;
console.log(binarySearchWithRecursion(arr,target));
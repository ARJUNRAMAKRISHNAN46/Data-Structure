//bubble sort---------------------------------------------------------------------------

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

//selection sort-----------------------------------------------------------------------

// function selectionSort(arr) {
//   for(let i = 0; i < arr.length - 1; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//       if(arr[i] > arr[j]) {
//         [arr[i],arr[j]] = [arr[j],arr[i]];
//       }
//     }
//   }
//   return arr;
// }

//quick sort----------------------------------------------------------------------------

// function quickSort(arr) {
//   if(arr.length < 2) {
//     return arr;
//   }

//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for(let i = 0; i < arr.length - 1; i++) {
//     if(arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   console.log('Success');
//   return [...quickSort(left),pivot,...quickSort(right)];
// }

//insertion sort-------------------------------------------------------------------------

// function insertionSort(arr) {
//   for(let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j;
//     for(j = i - 1; j >= 0 && arr[j] > key; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// merge sort-----------------------------------------------------------------------------

// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let mid = Math.floor(arr.length / 2);
//   let leftArray = arr.slice(0, mid);
//   let rightArray = arr.slice(mid);

//   return sort(mergeSort(leftArray), mergeSort(rightArray));
// }
// function sort(leftArray, rightArray) {
//   const sortedArray = [];
//   while (leftArray.length && rightArray.length) {
//     if (leftArray[0] < rightArray[0]) {
//       sortedArray.push(leftArray.shift());
//     } else {
//       sortedArray.push(rightArray.shift());
//     }
//   }
//   return [...sortedArray, ...leftArray, ...rightArray];
// }

// const arr = [2, 8, 5, 3, 9, -6, -2];
// console.log(mergeSort(arr));

//hash table------------------------------------------------------------------------

// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.size;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     if (!this.table[index]) {
//       this.table[index] = [];
//     }
//     this.table[index].push({ key, value });
//   }

//   get(key) {
//     const index = this.hash(key);
//     if (this.table[index]) {
//       let exist = this.table[index].find((item) => item.key === key);
//       if (exist) {
//         return exist.value;
//       } else {
//         return undefined;
//       }
//     }
//   }
//   remove(key) {
//     const index = this.hash(key);
//     if(this.table[index]) {
//       this.table[index] = this.table[index].filter((item) => item.key !== key);
//     }
    
//   }

//   display() {
//     for (let i = 0; i < this.size; i++) {
//       if (this.table[i]) {
//         console.log(this.table[i]);
//       }
//     }
//   }
// }

// const hash = new HashTable(40);

// hash.set("name", "arjun");
// hash.set("age", 19);
// hash.set("place", "chr");

// hash.display();

// console.log(hash.get("name"));

// hash.remove('age');
// hash.display();

//stack using queue----------------------------------------------------------------

// class StackUsingQueue {
//   constructor() {
//     this.queue1 = [];
//     this.queue2 = [];
//   }

//   push(value) {
//     this.queue1.push(value);
//   }

//   pop() {
//     if(this.queue1.length === 0) {
//       return null;
//     }

//     while(this.queue1.length > 1) {
//       this.queue2.push(this.queue1.shift());
//     }
//     const poppedValue = this.queue1.shift();

//     [this.queue1,this.queue2] = [this.queue2,this.queue1];

//     return poppedValue;
//   }

//   display() {
//     console.log('stack : ',this.queue1.slice().reverse());
//   }
// }

// const stack = new StackUsingQueue();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.display();

// console.log('popped value : ',stack.pop());

// queue using stack----------------------------------------------------------------------------

// class QueueUsingStack {
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }

//   enqueue(value) {
//     this.stack1.push(value);
//   }

//   dequeue() {
//     if(this.stack2.length === 0) {
//       while(this.stack1.length > 0) {
//         this.stack2.push(this.stack1.pop());
//       }
//     }

//     if(this.stack2.length === 0) {
//       return null;
//     }

//     return this.stack2.pop();
//   }

//   display() {
//     console.log('Queue',this.stack1.slice().reverse().concat(this.stack2));
//   }
// }

// const queue = new QueueUsingStack();

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// queue.display()

// console.log(queue.dequeue());

// queue.display();
// function factorial(n) {
//     if (n === 0) {
//         console.log('code execution finished');
//         return 1;
//     } else {
//         console.log(n);
//         return n * factorial(n - 1);
//     }
// }

// // Example usage
// const result = factorial(5);
// console.log("Factorial of 5:", result);

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insertFirst(data) {
//     this.head = new Node(data, this.head);
//   }

//   display() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// // Example usage
// const myList = new LinkedList();
// myList.insertFirst(3);
// myList.insertFirst(2);
// myList.insertFirst(1);

// // Display the linked list
// console.log("Original Linked List:");
// myList.display();

// function displayReverse(node) {
//   if (node === null) {
//     return;
//   }

//   displayReverse(node.next);
//   console.log(node.data);
// }

// // Example usage
// console.log("\nLinked List in Reverse Order:");
// displayReverse(myList.head);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  findSize() {
    return this.size;
  }

  insertValue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listEle = "";
      while (curr) {
        listEle += curr.value + " ";
        curr = curr.next;
      }
      console.log(listEle);
    }
  }
}

const linkedlist = new LinkedList();

console.log(linkedlist.isEmpty());
console.log(linkedlist.findSize());
linkedlist.insertValue(5);
// linkedlist.print();
linkedlist.insertValue(1);
linkedlist.insertValue(6);
linkedlist.print();

function printValue(node) {
  if (node === null) {
    return;
  }
  console.log(node.value);
  printValue(node.next);
}
printValue(linkedlist.head);

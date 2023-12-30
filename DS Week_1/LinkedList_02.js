//creating node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//creating a linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //checking if the list is empty or not
  isEmpty() {
    return this.size === 0;
  }
  //finding the size of the array
  getSize() {
    return this.size;
  }
  //adding a new value in the front of the previous list
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  //adding a new value in the back of the previous list
  append(value) {
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
  //insert new value to the list
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);

      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++
    }
  }
  //printing the node values
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listEle = "";
      while (curr) {
        listEle += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listEle);
    }
  }
}
//creating an object for linkedlist
const list = new LinkedList();

console.log("List is empty", list.isEmpty());
console.log("Size of the list is ", list.getSize());
//adding values in front
list.prepend(10);
list.prepend(40);
list.prepend(60);
// //adding values in rear
list.append(30);
list.append(50);
//inserting a new value
list.insert(15, 2);
list.insert(5, 0);
console.log("Size of the list is ", list.getSize());
list.print();

// const node = new Node(value);
// if (this.isEmpty()) {
//   this.prepend(value)
// } else {
//   let prev = this.head;
//   let currInd = 0;
//   while (currInd !== index) {
//     prev = prev.next;
//     currInd++;
//   }
//   let ano = prev.next;
//   prev.next = node;
//   node.next = ano;
// }

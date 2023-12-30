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
  //O(1)
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
  //O(n)
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
      this.size++;
    }
  }

  removeWithValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  searchValue(value) {
    if(this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while(curr) {
      if(curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      let currIndex = 0;
      while (index - 1 !== currIndex) {
        prev = prev.next;
        currIndex++;
      }
      let rmvNod = prev.next;
      removeNode = rmvNod;
      prev.next = rmvNod.next;
    }
    this.size--;
    return removeNode.value;
  }

  reverseList() {
    if(this.isEmpty()) {
      return null;
    }
    let prev = null;
    let curr = this.head;
    while(curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return true;
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
list.append(50);
list.prepend(60);
// //adding values in rear
list.append(30);
list.append(50);
//inserting a new value
list.insert(15, 2);
list.insert(5, 0);
list.print();
list.removeWithValue(50);
// list.removeWithValue(15);
// console.log(list.searchValue(7));
// console.log(list.removeFrom(10));
console.log("Size of the list is ", list.getSize());
// console.log(list.reverseList());
list.print();

//creating node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  insert(value, index) {}

  removeWithValue(value) {}

  searchValue(value) {}

  removeFromFirst() {
    if (this.isEmpty()) {
      return null;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }

  removeFromLast() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  duplicate() {
    let curr = this.head;
    while (curr && curr.next) {
      if (curr.value === curr.next.value) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
  }

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

const list = new LinkedList();

//   console.log("List is empty", list.isEmpty());
//   console.log("Size of the list is ", list.getSize());

list.prepend(60);
list.prepend(30);
list.prepend(30);
list.prepend(10);
list.append(70);
list.append(70);
list.append(80);
list.print();
list.duplicate();
list.print();
//   list.removeFromLast();
//   list.removeFromFirst();

//   list.insert(15, 2);
//   list.insert(5, 0);
//
//   console.log("Size of the list is ", list.getSize());
//   console.log(list.reverseList());
//   list.print();

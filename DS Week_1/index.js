const LinkedList = require("./LinkedList_04");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFirst();
  }

  peek() {
    return this.list.head.value;
  }

  getSize() {
    return this.list.getSize();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  print() {
    this.list.print();
  }
}

const linkedliststack = new LinkedListStack();

linkedliststack.push(20);
linkedliststack.push(40);
linkedliststack.push(30);
linkedliststack.print();
console.log(linkedliststack.peek());
console.log(linkedliststack.getSize());
console.log(linkedliststack.isEmpty());
console.log(linkedliststack.pop());
linkedliststack.print();

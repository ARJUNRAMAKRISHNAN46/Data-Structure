class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLL {
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
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
    return node.value;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
    return node.value;
  }

  insert(value, index) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let currIndex = 0;
      let curr = this.head;
      while (index !== currIndex + 1) {
        curr = curr.next;
        currIndex++;
      }
      let next = curr.next;
      curr.next = node;
      node.next = next;
      next.prev = node;
      node.prev = curr;
    }
    this.size++;
    return node.value;
  }

  reverseList() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.getSize === 1) {
      return this.head.value;
    } else {
      let curr = this.tail;
      let values = '';
      while (curr) {
        values += curr.value+ ' ';
        curr = curr.prev;
      }
      console.log(values);
    }
  }

  removeFromFront() {}

  removeFromEnd() {}

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let values = "";
      while (curr) {
        values += `${curr.value} `;
        curr = curr.next;
      }
      console.log(values);
    }
  }
}

const doublyLL = new DoublyLL();

doublyLL.prepend(2);
doublyLL.prepend(6);
doublyLL.print();
doublyLL.append(4);
doublyLL.append(8);
doublyLL.prepend(1);
doublyLL.print();
console.log(doublyLL.insert(3, 2));
doublyLL.print();
doublyLL.reverseList();
doublyLL.print();
console.log(doublyLL.getSize());

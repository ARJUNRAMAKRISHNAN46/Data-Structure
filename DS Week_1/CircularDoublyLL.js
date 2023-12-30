class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class CircularDoublyLL {
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
      node.next = node;
      node.prev = node;
    } else {
      node.next = this.head;
      node.prev = this.tail;
      this.head.prev = node;
      this.tail.next = node;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);

    if(this.isEmpty()) {
        this.head = node;
        this.tail = node;
        node.next = node;
        node.prev = node;
    } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.head.prev = node;
        node.next = this.head;
        this.tail = node;
    }
    this.size++;
  }

//   print() {
//     let prev = this.head;
//     let values = "";
//     while (prev == this.head) {
//       values += `${prev.value} `;
//       prev = prev.next;
//     }
//     console.log(values);
//   }

  print() {
    let current = this.head;
    let values = "";

    do {
      values += `${current.value} `;
      current = current.next;
    } while (current !== this.head);

    console.log(values.trim());
  }
}

const circularList = new CircularDoublyLL();

console.log(circularList.isEmpty());
circularList.prepend(20);
circularList.prepend(30);
circularList.append(10);
circularList.append(90);
circularList.prepend(80);
circularList.prepend(50);
console.log(circularList.getSize());
console.log(circularList.head.value);
console.log(circularList.tail.value);
circularList.print();

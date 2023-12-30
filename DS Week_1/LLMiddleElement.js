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
    return node.value;
  }

  middle() {
    if (this.isEmpty()) {
      return null;
    }
    let prev = this.head;
    let Next = this.head;
    while (Next !== null && Next.next !== null) {
      prev = prev.next;
      Next = Next.next.next;
    }
    return prev.value;
  }

  print() {
    if (this.isEmpty()) {
      return null;
    }
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += curr.value + " ";
      curr = curr.next;
    }
    console.log(listValues);
  }
}

const list = new LinkedList();

list.prepend(5);
list.prepend(4);
list.prepend(8);
list.prepend(2);
list.prepend(9);
list.prepend(1);
console.log(list.isEmpty());
console.log(list.middle());
list.print();

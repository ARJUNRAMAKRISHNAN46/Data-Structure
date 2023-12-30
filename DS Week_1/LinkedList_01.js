class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class sLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
  }

  display() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

// Example Usage:
const linkedList = new sLinkedList();

linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.display();

// At this point, the linked list is: 1 -> 2 -> 3

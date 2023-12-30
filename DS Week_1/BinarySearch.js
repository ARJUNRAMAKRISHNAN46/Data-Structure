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
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  binarySearch(target) {
    let curr = this.head;
    let length = 0;

    while (curr) {
      length++;
      curr = curr.next;
    }

    let low = 0;
    let high = length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let curr = this.head;

      for (let i = 0; i < mid; i++) {
        curr = curr.next;
      }

      if (curr.value === target) {
        return mid;
      } else if (curr.value < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }

  print() {
    if (!this.head) {
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

list.append(10);
list.append(20);
list.append(30);
list.append(60);
list.append(80);
list.append(70);
list.print();
console.log(list.binarySearch(20));

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {
    const newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  search(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }

  remove(key) {
    if (!this.head) {
      return;
    }

    if (this.head.key === key) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.key === key) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  insert(key, value) {
    const index = this.hash(key);
    this.table[index].append(key, value);
  }

  search(key) {
    const index = this.hash(key);
    return this.table[index].search(key);
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index].remove(key);
  }
}

const hashTable = new HashTable(10);
hashTable.insert("John", 28);
hashTable.insert("Jane", 32);
hashTable.insert("Doe", 45);

console.log(hashTable.search("John"));
console.log(hashTable.search("Jane"));
console.log(hashTable.search("Doe"));

hashTable.remove("Jane");
console.log(hashTable.search("Jane"));

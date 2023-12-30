class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const existSameKey = bucket.find((item) => item[0] === key);
      if (existSameKey) {
        existSameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const existSameKey = bucket.find((item) => item[0] === key);
      if (existSameKey) {
        return existSameKey[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const existSameKey = bucket.find((item) => item[0] === key);
      if (existSameKey) {
        bucket.splice(bucket.indexOf(existSameKey), 1);
      }
    }
  }

  display() {
    for(let i = 0; i < this.size; i++) {
        if(this.table[i]) {
            console.log(this.table[i]);
        }
    }
  }
}

const table = new HashTable(50);

table.set("name", "arjun");
table.set("age", 20);
table.set("mane","man");
table.display();
console.log(table.get("age"));
table.remove("mane");
table.display();
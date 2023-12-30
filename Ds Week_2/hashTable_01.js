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

    if (!this.table[index]) {
      this.table[index] = [];
    }

    this.table[index].push({ key, value });
  }

  get(key) {
    const index = this.hash(key);

    if (this.table[index]) {
      const exist = this.table[index].find((item) => item.key === key);

      if (exist) {
        return exist.value;
      } else {
        return undefined;
      }
    }
  }

  remove(key) {
    const index = this.hash(key);

    if (this.table[index]) {
      this.table[index] = this.table[index].filter((item) => item.key !== key);
    }
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(
          i,
          this.table[i].map((item) => item.value)
        );
      }
    }
  }
}

const table = new HashTable(40);

table.set("name", "arjun");
table.set("age", 20);
table.set("mane", "appu");
table.set("aemn", "aju");

console.log(table.get("mane"));
table.remove("name");

table.display();

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
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

    append(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    findMiddle() {
        if(this.isEmpty()) {
            return null;
        } else {
            let curr = this.head;
            let length = Math.floor(this.size/2);

            for(let i = 0; i < length-1; i++) {
                curr = curr.next;
            }
            let prev = curr;
            curr = curr.next.next;
            prev.next = curr;
            return true;
        }
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let values = '';

            while(curr) {
                values += `${curr.value} `;
                curr = curr.next;
            }
            console.log(values);
        }
    }
}

const list = new LinkedList();

console.log(list.isEmpty());
list.append(10);
list.append(30);
list.append(20);
list.append(50);
list.prepend(70);
list.prepend(90);
console.log(list.getSize());
list.print();
console.log(list.findMiddle());
list.print();
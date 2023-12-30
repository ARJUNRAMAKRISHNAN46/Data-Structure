const LinkedList = require('./LinkedList_04');

class Queue{
    constructor () {
        this.queue = new LinkedList();
    }

    enqueue(value) {
        this.queue.append(value);
    }

    dequeue() {
        return this.queue.removeFromFirst();
    }

    peak() {
        return this.queue.head.value;
    }

    isEmpty() {
        return this.queue.isEmpty();
    }

    getSize() {
        return this.queue.getSize();
    }

    print() {
        return this.queue.print();
    }
}

const queue = new Queue();

queue.enqueue(20);
queue.enqueue(60);
queue.enqueue(80);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.getSize());
console.log(queue.isEmpty());
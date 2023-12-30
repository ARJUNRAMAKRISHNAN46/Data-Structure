class Queue{
    constructor() 
    {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }  
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(4);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(16);
console.log(queue.size());
queue.dequeue(6);
console.log(queue.peek());
queue.print();

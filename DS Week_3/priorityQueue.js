class PriorityQueue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    enqueue(element, priority) {
        const item = {element, priority}

        let flag = false;

        for(let i = 0; i < this.items.length; i++) {
            if(item.priority < this.items[i].priority) {
                this.items.splice(i,0,item);
                flag = true;
                break;
            }
        }

        if(!flag) {
            this.items.push(item);
        }
    }

    dequeue() {
        if(!this.isEmpty()) {
            return this.items.shift();
        } else {
            return null;
        }
    }

    peak() {
        return this.items[0];
    }

    printQueue() {
        return this.items.map((item) => `element : ${item.element} , priority : ${item.priority}`);
    }
}

const pq = new PriorityQueue();

pq.enqueue(10,3);
pq.enqueue(30,6);
pq.enqueue(20,4);
pq.enqueue(80,1);
pq.enqueue(100,2);
pq.enqueue(40,5);

console.log(pq.printQueue());

console.log(pq.dequeue());
console.log(pq.peak());
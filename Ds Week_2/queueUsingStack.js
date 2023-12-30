class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue() {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    if (this.stack2.length === 0) {
      return null;
    }

    return this.stack2.pop();
  }

  display() {
    console.log("Queue:", this.stack1.slice().reverse().concat(this.stack2));
  }
}

const queue = new QueueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.display();

const dequeuedItem = queue.dequeue();
console.log("Dequeued Item:", dequeuedItem);
queue.display();

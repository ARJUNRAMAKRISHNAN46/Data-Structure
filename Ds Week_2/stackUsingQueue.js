class StackUsingQueue {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(value) {
    this.queue1.push(value);
  }

  pop() {
    if (this.queue1.length === 0) {
      return null;
    }

    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    const poppedValue = this.queue1.shift();

    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return poppedValue;
  }

  display() {
    console.log('Queue : ',this.queue1.slice().reverse());
  }
}

const stack = new StackUsingQueue();

stack.push(1);
stack.push(2);
stack.push(3);

stack.display();

console.log('Popped Value : ',stack.pop());

stack.display();
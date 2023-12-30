const LinkedList = require('./LinkedList_04');

class Stack {
    constructor() {
        this.stack = new LinkedList();
    }

    push(value) {
        this.stack.append(value);
    }

    pop() {
        return this.stack.removeFromLast();
    }

    display() {
        this.stack.print();
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.display();

console.log(stack.pop());

stack.display();
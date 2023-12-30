// class Stack {
//     constructor() {
//       this.items = [];
//     }

//     // Push element to the stack
//     push(element) {
//       this.items.push(element);
//     }

//     // Pop element from the stack
//     pop() {
//       return this.items.pop();
//     }

//     // Peek at the top element of the stack without removing it
//     peek() {
//       return this.items[this.items.length - 1];
//     }

//     // Check if the stack is empty
//     isEmpty() {
//       return this.items.length === 0;
//     }

//     // Get the size of the stack
//     size() {
//       return this.items.length;
//     }

//     // Reverse the elements in the stack without using built-in methods
//     reverse() {
//       const stackSize = this.size();
//       const reversedStack = [];

//       // Push elements from the original stack to the reversed stack
//       for (let i = 0; i < stackSize; i++) {
//         const currentElement = this.pop();
//         reversedStack.push(currentElement);
//       }

//       // Assign the reversed stack back to the original stack
//       this.items = reversedStack.items;
//       return reversedStack;
//     }
//   }

//   // Example Usage
//   const stack = new Stack();
//   stack.push(1);
//   stack.push(2);
//   stack.push(3);

//   console.log('Original Stack:', stack.items); // Output: Original Stack: [1, 2, 3]

//   console.log(stack.reverse());;

//   console.log('Reversed Stack:', stack.items); // Output: Reversed Stack: [3, 2, 1]

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    this.items.pop();
  }

  peak() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getSize() {
    return this.items.length;
  }

  reverse() {
    let reversed = [];
    const size = this.items.length;
    for (let i = 0; i < size; i++) {
      const value = this.items.pop();
      reversed.push(value);
    }
    return reversed;
  }
}

const revStack = new Stack();

revStack.push(10);
revStack.push(20);
revStack.push(30);
revStack.push(40);
revStack.push(50);
console.log(revStack.reverse());

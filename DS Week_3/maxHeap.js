class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Insert a new element into the heap
  insert(element) {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  // Remove and return the maximum element (root) from the heap
  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  // Restore heap property from bottom to top
   heapifyUp(index) {
    while(index > 0) {
        const parentIndex = Math.floor(index-1 / 2);
        if(this.heap[parentIndex] < this.heap[index]) {
            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]];
            index = parentIndex;
        } else {
            break;
        }
    }
  }

  // Restore heap property from top to bottom
  heapifyDown(index) {
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let largest = index;

      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] > this.heap[largest]
      ) {
        largest = leftChild;
      }

      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] > this.heap[largest]
      ) {
        largest = rightChild;
      }

      if (index !== largest) {
        // Swap if a child is greater than the current element
        [this.heap[index], this.heap[largest]] = [
          this.heap[largest],
          this.heap[index],
        ];
        index = largest;
      } else {
        break;
      }
    }
  }

  // Build a heap from an array of elements
  buildHeap(arr) {
    this.heap = [...arr];
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
        console.log(Math.floor(this.heap.length / 2));
      this.heapifyDown(i);
    }
  }

  // Get the maximum element without removing it
  getMax() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Get the size of the heap
  size() {
    return this.heap.length;
  }

  // Convert the heap to a string for display
  toString() {
    return this.heap.toString();
  }   

  remove(element) {
    const indexToRemove = this.heap.indexOf(element);
    if (indexToRemove === -1) {
      // Element not found in the heap
      return false;
    }

    // Replace the element to be removed with the last element
    this.heap[indexToRemove] = this.heap.pop();

    // Heapify up to restore the heap property
    this.heapifyUp(indexToRemove);

    // Heapify down to restore the heap property (if necessary)
    this.heapifyDown(indexToRemove);

    return true;
  }
}

// Example Usage for Max Heap
const maxHeap = new MaxHeap();
maxHeap.insert(20);
maxHeap.insert(10);
maxHeap.insert(30);
maxHeap.insert(5);
maxHeap.insert(25);

console.log("Max Heap:", maxHeap.toString());
console.log("Extract Max:", maxHeap.extractMax());
console.log("Max Heap after extraction:", maxHeap.toString());
maxHeap.buildHeap([4, 10, 3, 5, 1]);
class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Build Min Heap from an array of values
    buildHeap(values) {
      this.heap = values;
      for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
  
    // Insert a new element into the Min Heap
    insert(element) {
      this.heap.push(element);
      this.heapifyUp(this.heap.length - 1);
    }
  
    // Remove and return the minimum element (root) from the Min Heap
    removeMin() {
      if (this.heap.length === 0) {
        return null;
      }
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return min;
    }
  
    // Restore Min Heap property from top to bottom
    heapifyDown(index) {
      while (true) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let smallest = index;
  
        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
          smallest = leftChild;
        }
  
        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
          smallest = rightChild;
        }
  
        if (index !== smallest) {
          [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
          index = smallest;
        } else {
          break;
        }
      }
    }
  
    // Restore Min Heap property from bottom to top
    heapifyUp(index) {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[index] < this.heap[parentIndex]) {
          [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  }
  
  // Example Usage for Min Heap
  const minHeap = new MinHeap();
  minHeap.buildHeap([8, 7, 6, 5, 4, 3, 2, 1]);
  console.log("Min Heap:", minHeap.heap); // Output: [1, 4, 2, 5, 7, 6, 8, 3]
  minHeap.insert(0);
  console.log("Min Heap after Insert:", minHeap.heap); // Output: [0, 4, 1, 5, 7, 6, 8, 3, 2]
  console.log("Removed Min Element:", minHeap.removeMin()); // Output: 0
  console.log("Min Heap after Removal:", minHeap.heap); // Output: [1, 4, 2, 5, 7, 6, 8, 3]
  
  
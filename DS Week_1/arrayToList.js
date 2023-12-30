class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function arrList(arr) {
    if(arr.length === 0) {
        return null;
    }

    this.head = new Node(arr[0]);
    let curr = this.head;

    for(let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        console.log(curr.value);
        curr = curr.next;
    }
    return this.head;
}

const arr = [2,5,6,3,8,3,9];
console.log(arrList(arr));
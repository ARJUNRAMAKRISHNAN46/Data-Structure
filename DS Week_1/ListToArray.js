class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function ListToArray(head) {
    let resultArray = [];
    let curr = head;
    while(curr !== null) {
        resultArray.push(curr.value);
        curr = curr.next;
    }
    return resultArray;
}

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

node1.next = node2;
node2.next = node3;

console.log(ListToArray(node1));
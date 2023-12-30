// let obj = {"name" : "arjun"};
// let obj = null;

// if (obj === null || obj === undefined) {
//     console.log("Memory Is Insufficient");
// } else {
//     obj = null;
//     console.log("Memory Freed");
// }


function createObject() {
    let obj = { data: "example" };
    return obj;
}

let myObject = createObject();
// At this point, myObject is reachable and holds a reference to the created object

myObject = null;
// The created object is no longer reachable and can be garbage collected
console.log(myObject);
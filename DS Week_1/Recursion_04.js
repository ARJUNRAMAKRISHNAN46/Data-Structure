//Tail Recursion

function tailRecursion(n,acc = 0) {
    if(n === 0) {
        return acc;
    }
    console.log('n :',n);
    console.log('acc',acc);
    return tailRecursion(n-1,acc+n);
}

tailRecursion(6);
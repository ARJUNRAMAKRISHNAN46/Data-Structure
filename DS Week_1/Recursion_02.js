function recursionA(n) {
    if(n > 0) {
        console.log(n);
        recursionB(n-1);
    }
}
function recursionB(n) {
    if(n > 0) {
        console.log(n);
        recursionA(n-1)
    }
}
recursionA(6);
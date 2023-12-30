function Recursion(n) {
    if(n <= 0) {
        return;
    }

    console.log(n);
    Recursion(n-1);
}

Recursion(7);
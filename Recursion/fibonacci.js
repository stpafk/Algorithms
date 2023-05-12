
function fib(n) {
    
    var arr = [0, 1, 1];

    if (n === 2) {
        return [0, 1, 1];
    } if (n === 1) {
        return [0, 1];
    } if (n === 0) {
        return 0;
    }
    let count = 3;
    while (count < n) {
        arr.push(arr[count - 1] + arr[count - 2]);
        console.log(count, arr);
        count++;
    }
    return arr;
}

var arr = []
function recursionFib(n) {
    if (n <= 1) {
        return n;
    };
    
    return recursionFib(n - 1) + recursionFib(n - 2);

}

console.log(recursionFib(9));

class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearch {
    constructor(array) {
        this.root = buildTree(array);
    }

    buildTree(arr) {
        if (arr.length === 0) {
            return;
        }

        const array = new Set(arr);
        array = array.sort(function(a, b) {return a - b});
        arr.forEach(element => {
            let node = new Node(element);
        });
    }

}

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
        const nodes = array.map(data => new Node(data));

        console.log(arr[0])
        this.root = arr[0]
    }

}

let tree = new BinarySearch([0, 1, 2, 3])
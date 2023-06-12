
function Node(data, left= null, right=null) {
    return {
        data: data,
        left: left,
        right: right
    }
}

function BuildTree(array, start=0, end=array.length - 1) {
    if (start > end) {
        return null
    }

    const mid = parseInt((start + end) / 2);
    const root = Node(array[mid])

    root.left = BuildTree(array, start, mid - 1);
    root.right = BuildTree(array, mid + 1, end);

    return root

 }

function Tree(arr) {
    let Arr;
    if (Array.isArray(arr)) {
        Arr = [...new Set(arr.sort((a, b) => a - b))];
    }

    return {
        root: BuildTree(arr),
        
        insert(value, root = this.root) {
            if (root === null) {
                root = Node(value);
                return root;
            }

            if (value < root.data) {
                root.left = this.insert(value, root.left);
            } else if (value > root.data) {
                root.right = this.insert(value, root.right);
            }

            return root
        },

        delete(value, root=this.root) {
            if (value === root.data) {
                
            } 
        },

        prettyPrint(node, prefix = "", isLeft = true) {
            if (node === null) {
              return;
            }
            if (node.right !== null) {
              prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
            }
            console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
            if (node.left !== null) {
              prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
            }
          }

        
    }
}
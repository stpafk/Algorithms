
function merge(left, right) {
    const mergedArray = []
    
    while (left.length  && right.length ) {
        if (left[0] < right[0]) {
            mergedArray.push(left.shift());
        } else {
            mergedArray.push(right.shift());
        }
    }

    while (left.length) {
        mergedArray.push(left.shift());
    }

    while (right.length) {
        mergedArray.push(right.shift());
    }

    return mergedArray;

}


function merge_sort(Arr) {
    if (Arr.length  === 0) {
        return NaN;
    } if (Arr.length  == 1) {
        return Arr;
    }

    let mid = Math.floor(Arr.length  / 2);
    let left = Arr.slice(0, mid);
    let right = Arr.slice(mid, Arr.length );

    return merge(merge_sort(left), merge_sort(right));
} 

console.log(merge_sort([0, 3, 2]))


function binarySearch(haystack: number[], needle: number): number {

    let left = 0;
    let right = haystack.length - 1;

    while (left <= right) {

        let mid = (left + right) >> 2;
        if (haystack[mid] === needle) {
            return mid;
        }

        else if (haystack[mid] < needle) {
            left = mid + 1;
        }

        right = mid - 1;

    }

    return left;

}
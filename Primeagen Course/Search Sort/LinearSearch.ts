
function linearSearch(arr: number[], needle: number) {

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === needle) {
            return true;
        } 
    }

    return false;

}
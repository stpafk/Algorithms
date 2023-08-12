//Algorithm Categorization. In other words, the time or memory your algorithm takes to complete a task.

//BigO help to define which algorithm/data structure to use

function sum_char_codes(n: string): number {

    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;

}

//O(N)



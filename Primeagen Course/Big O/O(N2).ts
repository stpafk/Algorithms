

function sum_char_codes_n2(n:string): number {

    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            sum += 1;
        }
    }

    return sum;

}
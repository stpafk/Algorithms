
function sumMix(x: any[]): number {
    let res = 0;

    for (let i = 0; i < x.length; i++) {
        res += Number.parseInt(x[i])
    }
    
    return res;
}

sumMix(['1', 2])
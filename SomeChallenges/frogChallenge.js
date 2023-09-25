function solution(a) {

    let jumps = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            jumps++;
            if (i + a[i] >= a.lenght) {
                return jumps;
            }
            i += a[i];
        }

        if (a[i] < 0) {
            jumps++;
            if (i - a[i] <= -1) {
                return jumps;
            }
            i -= a[i];
        }
    }

    if (jumps === 0) {
        return -1;
    }
    return jumps;
  }

solution([1, 2, 2, -1])
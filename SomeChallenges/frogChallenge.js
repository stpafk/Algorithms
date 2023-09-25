function solution(a) {
	var c = 0, i = 0;

	while (typeof a[i] !== 'undefined') {
    c++;
    i += a[i];
    
    if (c > a.length) {
    	return -1;
    }
  }

  return a.length ? c : -1;
}
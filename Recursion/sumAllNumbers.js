function sumRange(n) {
  let sum = 0;
  if (n === 0) {
    return sum;
  } else {
    sum += n;
    sumRange(n-1);
  }
  return sum
}
    
    

function pow(x, y) {
  if (y === 0) return 1;
  if (y === 1) return x;
  let result = 1;
  for (let i = 1; i <= y; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(3, 5));
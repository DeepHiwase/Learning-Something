function isPowerOfTwo(n) {
  if (n < 1) return false;

  // for (let i = 0; i < n; i++) {
  //   if (n === 2 ** i) {
  //     return true;
  //   }
  // }
  // return false;

  // Big-O -> O(n)

  // while (n > 2) {
  //   if (n % 2 !== 0) {
  //     return false;
  //   }
  //   n /= 2; // input is reduced by half -> logn complexity
  // }
  // return true;

  // // Big-O -> O(logn)

  // Bitwise & operator -> study case ->  n & n-1 === 0 then it always equal to 0
  // in binary, a number power of two ends with 0 2-> 10, 4-> 100
  return (n & (n - 1)) === 0; // Big-o -> O(1)
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

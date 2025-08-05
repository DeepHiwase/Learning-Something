function isPrime(n) {
  if (n < 2) return false;
  // let count = 0;
  // for (let i = n - 1; i > 1; i--) {
  //   if (n % i === 0) {
  //     count++;
  //   }
  // }
  // if (count) {
  //   return false;
  // } else {
  //   return true;
  // }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

// Big-o -> O(n)
// Big-o -> O(sqrt(n))

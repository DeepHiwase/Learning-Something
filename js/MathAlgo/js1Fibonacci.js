// n =7
// console.log(0);
// console.log(1);
// for (let i = 0, j = 1, index = 2; index < n; index++) {
//   let sum = i + j;
//   console.log(sum);
//   i = j;
//   j = sum;
// }

function fibonacci(n) {
  const fib = [0, 1]; // o(1)
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; // O(n)
  }
  return fib; // O(1)
}

console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

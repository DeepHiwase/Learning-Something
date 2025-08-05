// function printSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

function printSum(n) {
  return (n * (n + 1)) / 2;
}

console.log(printSum(5));

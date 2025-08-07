// function climbingStaircase(n) {
//   // base case
//   if (n == 0) {
//     return 1;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   if (n == 2) {
//     return 2;
//   }

//   return climbingStaircase(n - 1) + climbingStaircase(n - 2);
// }

// console.log(climbingStaircase(3));
// console.log(climbingStaircase(4));
// console.log(climbingStaircase(5));

// O(2^n) -> really slow

function climbingStaircase(n) {
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}

console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

// O(n)

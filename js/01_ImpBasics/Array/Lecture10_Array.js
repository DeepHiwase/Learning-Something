// // Write a function to find the avg of three numbers
// function getAvgOfNumbers(...nums) {
//   let totalSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     totalSum += element;
//   }

//   return totalSum / nums.length;
// }

// console.log("Average of numbers:", getAvgOfNumbers(1, 2, 3));

// // Write a func to find facto of a number
// function calcFactorial(num) {
//   if (num === 0 || num === 1) return 1;

//   let multicationAns = 1;
//   while (num != 0) {
//     multicationAns *= num;
//     num--;
//   }

//   return multicationAns;
// }

// console.log("Factorial of given number:", calcFactorial(5));

// /**
//  *
//  * @param {*} n is must be less than r
//  * @param {*} r
//  * @returns return nCr
//  */
// // nCr -> Combination
// function getTotalCombinatons(n = 0, r = 0) {
//   if (n < r)
//     return "both n and r must be non-negative integers, with the crucial condition that 0 ≤ r ≤ n";
//   return calcFactorial(n) / (calcFactorial(n - r) * calcFactorial(r));
// }

// console.log("nCr of given number:", getTotalCombinatons(3, 4));
// console.log("nCr of given number:", getTotalCombinatons(4, 3));

// // Arrays
// console.count();

// const arr = new Array(6).fill(0, 0, 5);
// console.log(arr);
// console.log(typeof arr);
// console.log(arr.push(2));
// console.log(arr.pop());

// // Find the absolute diff of (sum of all odd elements) and (sum of all even elements)
// function getSumArray(...nums) {
//   // let length = nums.length;
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }

//   return sum;
// }

// function getAbsDiff(...nums) {
//   let evenSum = [];
//   let oddSum = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       evenSum.push(nums[i]);
//     } else {
//       oddSum.push(nums[i]);
//     }
//   }

//   return Math.abs(getSumArray(...evenSum) - getSumArray(...oddSum));
// }

// console.log(
//   "Abs diff b/w even numbers and even numbers:",
//   getAbsDiff(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// );

// FizzBuzz Problem
/* FizzBuzz Problem
 you're given an array, write a function which print in below manner
- Fizz if multiple of 3
- Buzz if multiple of 5
- FizzBuzz if multiple of both 3 and 5
*/
/**
 * @description FizzBuzz Problem:
 you're given an array, write a function which print in below manner
- Fizz if multiple of 3
- Buzz if multiple of 5
- FizzBuzz if multiple of both 3 and 5
 * @param  {...any} nums[] 
 * @returns array like [
  1,      2,
  'Fizz', 4,
  'Buzz', 'Fizz',
  7,      8,
  'Fizz', 'FizzBuzz',
  'Fizz', 'FizzBuzz'
]
 */

function getIfFizzBuzz(...nums) {
  console.log(nums);
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element % 3 === 0 && element % 5 === 0) {
      ans.push("FizzBuzz");
    } else if (element % 3 === 0) {
      ans.push("Fizz");
    } else if (element % 5 === 0) {
      ans.push("Buzz");
    } else {
      ans.push(nums[i]);
    }
  }

  return ans;
}

console.log(
  "FizzBuzz problem solution\n",
  getIfFizzBuzz(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 15)
);

const arrOps = [1, 2];

// push
// at end
arrOps.push(12);
arrOps.push(...[13, 14, 15]);
arrOps.push(16, 17, 18);
console.log(arrOps);
// at beginging
arrOps.unshift(-12);
arrOps.unshift(...[-13, -14, -15]);
arrOps.unshift(-16, -17, -18);
console.log(arrOps);
// HW: how to insert multiple elements with push, unshift

// pop
// from end
arrOps.pop();
console.log(arrOps);
// from begining
arrOps.shift();
console.log(arrOps);

console.log(arrOps.indexOf(12));
console.log(arrOps.lastIndexOf(12));
console.log(arrOps.includes(12));

// function findIndex(arr, targetValue) {
//   return arr.indexOf(targetValue);
// }

// console.log("Index of 2:", findIndex([1, 2, 3], 2));

// Find and replace the value of element = 10 to 14 using indexOf and includes methods
arrOps.push(10);
arrOps.includes(10) ? (arrOps[arrOps.indexOf(10)] = 14) : null;
console.log(arrOps);

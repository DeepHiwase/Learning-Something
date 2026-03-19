// Recursion

// // Print N - 1
// function printNto1(N) {
//   // base case
//   if (N === 0) {
//     return;
//   }

//   // 1 case solve
//   console.log(N);

//   // recursion call - tail recusrion
//   printNto1(N - 1);
// }

// printNto1(10);

// function print1ToN(N) {
//   // base case
//   if (N === N + 1) {
//     return;
//   }

//   // 1 case solve
//   console.log(N);

//   // recursion call - tail recusrion
//   print1ToN(N + 1);
// }

// print1ToN(1);

// function print1ToN(N = 10) {
//   // base case
//   if (N === 0) {
//     return;
//   }

//   // recursion call - head recusrion
//   print1ToN(N - 1);

//   // 1 case solve
//   console.log(N);

// }

// // print1ToN(10);
// print1ToN();

// function print1ToN(N = 10) {
//   // base case
//   if (N === 0) {
//     return;
//   }

//   // recursion call - head recusrion
//   print1ToN(N - 1);

//   // 1 case solve
//   console.log(N);

// }

// function printNto1(N) {
//   // base case
//   if (N === 0) {
//     return;
//   }

//   // 1 case solve
//   console.log(N);

//   // recursion call - tail recusrion
//   printNto1(N - 1);
// }

// function print1ToNTo1(N) {
//   print1ToN(N);
//   printNto1(N);
// }

// print1ToNTo1(10)

// function twoWayPath(n, current = n) {
//   // base case
//   if (current <= 0) {
//     return;
//   }

//   // 1 case solve
//   console.log(current);

//   // recursion call
//   twoWayPath(n, current - 1);

//   // returning case solve // call stack
//   console.log(current);
// }

// twoWayPath(5)

// function printFirstNNaturalNumSum(N) {
//   // base case
//   if (N === 0) {
//     return 0;
//   }

//   // recirsion call + 1 case handle
//   return N  + (printFirstNNaturalNumSum(N - 1));
// }

// console.log(printFirstNNaturalNumSum(5))

// function powX(x, n) {
//   // base case
//   if (n === 0) {
//     return 1;
//   }

//   // recirsion call + 1 case handle
//   return x * powX(x, n - 1);
// }

// console.log(powX(5, 4));

// ❌
// function reverseWord(str, num) {
//   if (num === str.length) return;

//   console.log(str.slice(num) + str[num]);

//   reverseWord(str, num + 1);
// }

// console.log(reverseWord("hello", 0));

// function reverseWord(str, num) {
//   if (str === "") return "";

//   return reverseWord(str.slice(1)) + str[0];
// }

// console.log(reverseWord("hello"));

// // Factorial
// function getFactorial(n) {
//   if (n === 1) return 1;

//   return n * getFactorial(n - 1);
// }

// console.log(getFactorial(5));

// Fibonacci
function getFibonacci(n) {
  if (n === 1) {
    console.log(0);
    return;
  };
  if (n === 2) {
    console.log(1);
    return;
  };

  getFibonacci(n - 1) + getFibonacci(n - 2);
  

  
  
}

getFibonacci(6);

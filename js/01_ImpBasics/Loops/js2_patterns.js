/* //  Factorial
let n = process.ar;
let fact = 1;
for (let index = 1; index <= n; index++) {
  fact *= index;
}
console.log("factorial of", n, "is =>", fact); */

// Prime

// let n = 7;
// // let count = 0;
// // let isPrime = true; // using flags makes easy
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) {
//     // count++;
//     console.log("Non Prime");
//   }
// }
// console.log("Prime Number");
// // if (count < 2) {
// //   console.log("Prime Number");
// // } else {
// //   console.log("Non Prime Number");
// // }

// GCD

// break & continue keyword
// for (let index = 100; index <= 200; index++) {
//   if (index % 17 === 0) break;
//   console.log(index);
// }

// for (let index = 100; index <= 200 && index % 17 !== 0; index++) {
//   if (index % 17 === 0) break;
//   console.log(index);
// }

// // continue
// for (let index = 1; index <= 100; index++) {
//   if (index % 17 === 0) continue;
//   console.log(index ** 2);
// }

// for (let i = 5; i <= 200; i++) {
//   if (i % 5 === 0) {
//     if (i % 2 === 0) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// console.log("--------------");

// let count = 10;
// for (let i = 1; i < 200; i++) {
//   if (count === 0) break;
//   if (i % 5 === 0) {
//     if (i % 2 === 0) {
//       continue;
//     }

//     console.log(i);
//     count--;
//   }
// }

// Pattern printing
// for (let index = 1; index <= 10; index++) {
//   let pattern = "";
//   for (let j = 1; j <= 10; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********

for (let index = 1; index <= 6; index++) {
  let pattern = "";
  for (let j = 1; j <= 6; j++) {
    pattern += j + " ";
  }
  console.log(pattern);
}

// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6

// for (let i = 5; i > 0; i--) {
//   let pattern = "";
//   for (let j = i; j > 0; j--) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

// for (let i = 1; i <= 6; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += j + " ";
//   }
//   console.log(pattern);
// }

// // do while
// do {
//   console.log("Hi one time");
// } while (false);

// console.log({ reponse: prompt("Do you want to continue?") });


// do while is use when u don't know first response but u just need one value first then it do excute and then start checking condition
let n = process.ar;
let fact = 1;
for (let index = 1; index <= n; index++) {
  fact *= index;
}
console.log("factorial of", n, "is =>", fact);


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

// for (let index = 100; index <= 200; index++) {
//   if (index % 17 === 0) break;
//   console.log(index);
// }

// for (let index = 100; index <= 200 && index % 17 !== 0; index++) {
//   if (index % 17 === 0) break;
//   console.log(index);
// }

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

let N = 117;

let isPrime = true;
// for (let i = 2; i <= Math.floor(Math.pow(N, 0.5)); i++) {
// for (let i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
for (let i = 2; i * i <= N; i++) {
  if (N % i === 0) {
    isPrime = false;
    break;
  }
}

isPrime == true
  ? console.log(N, "is a prime number")
  : console.log(N, "is not a prime number");
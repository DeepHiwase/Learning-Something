// 1

/* num = "405";

const strNum = String(num);
const digitArr = strNum.split("");

let sum = 0;
for (let i = 0; i < digitArr.length; i++) {
  sum += parseInt(digitArr[i]) ** 3;
}
console.log(sum); */

// 2
/* let n = 13;

checkLabel: for (let i = 2; i <= n; i++) {
  for (let j = 2; j*j < i; j++) {
    if (i % j === 0) {
      continue checkLabel;
    }
  }
  console.log(i);
} */

// 3

//       *
//     *   *
//   *       *
// *           *
//   *       *
//     *   *
//       *

let n = 4;

// Upper hollow full pyramid
for (let i = 0; i < n; i++) {
  let strPattern = "";
  // space
  for (let j = 0; j < n - i - 1; j++) {
    strPattern += "  ";
  }
  // hollow pyramid
  for (let j = 0; j < 2 * i + 1; j++) {
    if (j == 0 || j == 2 * i + 1 - 1) {
      strPattern += "* ";
    } else {
      strPattern += "  ";
    }
  }
  console.log(strPattern);
}
// Lower hollow inverted full pyramid
for (let i = 0; i < n - 1; i++) {
  let strPattern = "";
  // space
  for (let j = 0; j < i + 1; j++) {
    strPattern += "  ";
  }
  // inverted hollow pyramid
  for (let j = 0; j < 2 * (n - 1) - 2 * i - 1; j++) {
    if (j == 0 || j == 2 * (n - 1) - 2 * i - 2) {
      strPattern += "* ";
    } else {
      strPattern += "  ";
    }
  }

  console.log(strPattern);
}


// // 4
// let sum = 0; // put outside
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);
// // output -> 2 + 4 + 6 + 8 + 10 = 30

// // 5
// let i = 0;
// while (i <= 5) {
//   i++;
//   if (i === 4) continue;
//   if (i <= 5) {
//     console.log(i);
//   }
// }

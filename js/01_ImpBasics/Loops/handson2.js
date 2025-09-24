console.log(null == undefined);

// let count = 0;
// while (false) {
//   count++;
//   console.log(count);
// }

// let i = 1;
// while (i <= 10 || i < 11 || i != 11) {
//   console.log(i);
//   i++;
// }

// let num = 1;
// while (num <= 25) {
//   if (num %2 === 0) console.log(num);
//   num++;
// }

// For loop
// for (let index = 1; index <= 10; index++) {
//   console.log("hi");
// }
// // O(10) -> O(1)

// for (let index = 3; index < 50; index++) {
//   if (index % 3 === 0) console.log(index);
// }

const n1 = false &&  5;
const n2 = n1 === false;
const n3 = n2 && "67";

console.log({ n1, n2, n3 });
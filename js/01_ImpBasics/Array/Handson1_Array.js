// // let arr = new Array();

// // const { isValidElement } = require("react");

// // let arr = [];
// let fruits = ["Apple", "Orange", "Plum"];

// fruits[0] = "Banana";
// fruits[3] = "BlueBerry";

// fruits.length;

// // mix of values
// let arr = [
//   "Apple",
//   { name: "John" },
//   true,
//   function () {
//     console.log("hello");
//   },
// ];

// // get the object at index 1 and then show its name
// // alert( arr[1].name ); // John

// // get the function at index 3 and run it
// arr[3](); // hello

// console.log(arr.at(-2));

// console.log(arr.at(-1)); // it "retrives"
// console.log(arr.pop()); // it "retrives" && "remove" last element -> modify arr

// arr.push("Hello1");
// arr[arr.length] = "Hello2";

// for (const arrElement of arr) {
//   console.log(arrElement);
// }

// // Dont use for in for arrays only use for objects
// // for (const arrElement in arr) {
// //   if (!Object.hasOwn(arr, arrElement)) continue;

// //   const element = arr[arrElement];
// //   console.log(element);
// // }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][1]);

// console.log(String(arr));

// console.log(String([]));
// console.log(String([] + 1));
// console.log(String([1,2] + 1));
// console.log(String(arr));

// // alert( [] == [] ); // false
// // alert( [0] == [0] ); // false

// // console.log( 0 == [] ); // true

// // console.log('0' == [] ); // false

// isFinite(12);
// isNaN(NaN);
// // isValidElement(<div></div>)

// // splice -> to insert/delete/replace
// const arrMethods = [10, 20, 30, 40];//[10, 20, 30, 40]
// // delete arrMethods[1]; //[ 10, <1 empty item>, 30, 12, 23, 40 ] -> if it treated as object -> but still length and o/p shows length 4
// console.log(arrMethods.splice(3, 0, 12, 13));//[]
// console.log(arrMethods.splice(4, 1, 23));//[13] -> only returns elements[] array which are removed
// console.log(arrMethods.splice(5, 3)); // [40]
// // -ve indexes allowed
// console.log(arrMethods.splice(-1, 2)); // [23]

// console.log(arrMethods);

// // slice -> shorter of splice, not modified original array, only create new array with getting values from start eindex to index previos to given end index
// console.log([10, 20, 30, 40].slice())// new array not original -> [ 10, 20, 30, 40 ]
// console.log([10, 20, 30, 40].slice(1))// new array not original -> [ 20, 30, 40 ]
// console.log([10, 20, 30, 40].slice(1, 2))// new array not original -> [ 20 ]
// console.log([10, 20, 30, 40].slice(1, 3))// new array not original -> [ 20, 30 ]
// console.log([10, 20, 30, 40].slice(-2))// new array not original -> [ 30, 40 ]
// console.log([10, 20, 30, 40].slice(-2, -1))// new array not original -> [ 30 ]

// concat -> no modified original -> creates new array
// let arr = [1, 2];

// // create an array from: arr and [3,4]
// alert( arr.concat([3, 4]) ); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
// alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
// alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// console.log( arr.concat(arrayLike) ); // ->1,2,[object Object] ->[ 1, 2, { '0': 'something', length: 1 } ]

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// console.log( arr.concat(arrayLike) ); // 1,2,something,else

// do something with each items in array -> forEach
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);
// o/p ->   forEach stytax -> item,index,array in callback function
// Bilbo 0 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
// Gandalf 1 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
// Nazgul 2 [ 'Bilbo', 'Gandalf', 'Nazgul' ]

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// ["Bilbo", "Gandalf", "Nazgul"].forEach();// undefined function error

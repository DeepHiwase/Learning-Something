// // K sum sub array
// function findSubArrayWithKSum(arr, k) {
//   let biggerSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     let sumArr = [];
//     for (j = i; j < arr.length; j++) {
//       sumArr.push(arr[j]);
//       sum += arr[j];
//       console.log(sumArr, sum);
//       if (sumArr.length === k) biggerSum += sum;
//     }
//   }
//   console.log(biggerSum);
// }

// findSubArrayWithKSum([7, 4, 8, 6, 5], 3);

// function gaysbuksakdk(arr = [7, 4, 8, 6, 5], k) {
//   let biggerSum = 0;
//   let i = 0;
//   while (i < arr.length - k + 1) {
//     biggerSum += arr.slice(i, i + k + 1).reduce((sum, init) => sum + init, 0);
//     i++;
//   }

//   console.log(biggerSum);
// }
// gaysbuksakdk([7, 4, 8, 6, 5], 3);

// console.log(Array.isArray([1, 2, 3, 4, 5]));

// const arr1 = [1, "85", "rty", [2, [4, 5], 32]];
// const arr2 = [
//   [1, 2, 3, 4],
//   [2, 3, 4, 5],
//   [3, 4, 5, 6],
// ];

// function isMatrix(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(array[i])) {
//     }
//   }
// }

// if (Array.isArray(arr1)) {
//   let arr1Len = arr1.length;

//   if (Array.isArray(arr1[0])) {
//     let arr1OLen = arr1[0].length;
//     if (Array.isArray(arr1[0][0])) {
//       let arr1O0Len = arr1[0][0].length;
//       (arr1Len === arr1OLen) === arr1O0Len
//         ? console.log("Its a 3d matrix")
//         : console.log("Its not a 3d matrix");
//     } else {
//       console.log("Its not a 3d matrix");
//     }
//   } else {
//     console.log("Its not a 3d matrix");
//   }
// } else {
//   console.log("Its not a 3d matrix");
// }

// above code is wrong -> check for each element  is array

//
function reverseArr(arr) {
  return arr.reverse();
}

console.log(reverseArr([1, 2]));

function reverseEachRowArr(arr2d) {
  for (let i = 0; i < arr2d.length; i++) {
    arr2d[i] = reverseArr(arr2d[i]);
  }

  return arr2d;
}

// function reverseEachColArr(arr2d) {
//   for (let i = 0; i < arr2d.length; i++) {
//     arr2d[] = reverseArr(arr2d[i][j]);
//   }

//   return arr2d;
// }

console.log(
  reverseEachRowArr([
    [1, 2],
    [2, 3, 4, 5],
    [6, 5, 4, 3],
  ])
);

// swapping -> [a, b] = [b, a]
// reverse -> [arr[i], arr[n-i-1]] = [arr[n-i-1], arr[i]] -> loop wuntil half of arr -> Math.floor(i)

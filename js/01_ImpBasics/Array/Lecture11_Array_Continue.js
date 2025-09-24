// let n = 4;

// function printSolidDiamond(n) {
//   // Upper Full Pyramid

//   // Outer loop
//   for (let i = 0; i < n; i++) {
//     let patternStr = "";
//     // Inner loop
//     // space
//     for (let j = 0; j < n - i - 1; j++) {
//       patternStr += "  ";
//     }
//     // star
//     for (let j = 0; j < 2 * i + 1; j++) {
//       patternStr += "* ";
//     }

//     console.log(patternStr);
//   }

//   // Lower Full Pyramid

//   // Outer loop
//   for (let i = 0; i < n - 1; i++) {
//     let patternStr = "";
//     // Inner loop
//     // space
//     for (let j = 0; j < i + 1; j++) {
//       patternStr += "  ";
//     }
//     // star
//     for (let j = 0; j < 2 * (n - 1) - 2 * i - 1; j++) {
//       patternStr += "* ";
//     }

//     console.log(patternStr);
//   }
// }

// printSolidDiamond(n);

// // Slice
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr.slice(2, 5));

// // Splice
// console.log(arr.splice(1, 0, 3));

// // concat
// let arr2 = [-3, -4, -2, 0];
// const arr3 = arr.concat(arr2, [1, 2, 3, 4, 5], [4, 5, 6, 7, 8, 9], "a");
// console.log(arr3);

// for (const i in arr) {
//   if (!Object.hasOwn(arr, i)) continue;
//   // since i type is string -> you can't do i + 1 directly as it will concatinate
//   const element = arr[i];

//   console.log(element);
// }

// for (const it of arr) {
//   console.log(it);
// }

// // Prefix sum -> adding sum of all number prefix to it (comes before) to curr item
// function prefixSum(...nums) {
//   let prefixSum = 0;
//   const ans = [];
//   for (const it in nums) {
//     prefixSum += nums[it];
//     ans[it] = prefixSum;
//   }

//   return ans;
// }

// console.log("Prefix Sum ans:", prefixSum(12, 4, -8, 10));

// // Swapping two values
// function swapVariables(a, b) {
//   let temp = a;
//   a = b;
//   b = temp;

//   return { a, b };
// }

// console.log(swapVariables(10, 20));

// // Q. Print even elemetents of an array
// function printEvenIndexedElements(arr) {
//   for (let i = 0; i < arr.length; i = i + 2) {
//     console.log(arr[i]);
//   }
// }
// printEvenIndexedElements([1, 2, 3, 4, 5, 6]);

// // Q. Swap alt elemetents of an array
// function swapAlternateElements(arr) {
//   for (let i = 0; i < arr.length && i + 1 < arr.length; i = i + 2) {
//     const tempElement = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = tempElement;
//   }

//   return arr;
// }

// // also valid -> [a, b] = [b, a] => shallow copy
// // deep copy meaning -> no refrence only value copy
// // shallow copy meaning ->  `refrence` and value copy

// console.log(swapAlternateElements([10, 20, 30, 40]));
// console.log(swapAlternateElements([10, 20, 30, 40, 50]));

// let arrPrintMe = [1, 2, "123", 2.344, true, [3, 4, "five", [2, 5, "printMe"]]];
// console.log(arrPrintMe[5][3][2]);

// Given an array of consective numbers, but there on number that's missing . find it.
// i/p -> [1,2, 3, 5, 6,7]
// o/p -> 4
/* let arr = [1, 2, 3, 5, 6, 7];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] - arr[i-1] > 1 ) {
    console.log(arr[i-1]+1);
  }
} */

//

// subarry -> consecative number of array elements

// no. of subarrays = (n * (n + 1)) / 2

// // subarrays
let array = [1, 4, 5, 7, 3, 2];
// for (let i = 0; i < array.length; i++) {
//   let ansArr = [];
//   for (let j = i; j < array.length; j++) {
//     // ansArr.push(array[j]);
//     // console.log(ansArr);

//     console.log(array.slice(i, j + 1));
//   }
// }

// // Sum of all subarrays
// let allAubArraySumKaSum = 0;
// for (let i = 0; i < array.length; i++) {
//   let ansArr = [];
//   let sum = 0;
//   for (let j = i; j < array.length; j++) {
//     ansArr.push(array[j]);
//     sum += array[j];
//     console.log(ansArr, "-> Sum of this subarray:", sum);
//     allAubArraySumKaSum += sum;
//   }
// }
// console.log(allAubArraySumKaSum);

//O(N^2)
// Optimised -> O(n)
/* function getArrWithTargertSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let subArrSum = 0;
    let subArrAns = [];
    for (let j = i; j < arr.length; j++) {
      subArrSum += arr[j];
      subArrAns.push(arr[j]);

      if (subArrSum === target) console.log(subArrAns);
    }
  }
}

console.log("Ans subarray with target sum is:");
getArrWithTargertSum([1, 4, 5, 7, 3, 2], 15); */

// 2D Array

/* function printTwoArr(twoDArr) {
  for (let i = 0; i < twoDArr.length; i++) {
    let rowArr = [];
    for (let j = 0; j < twoDArr[i].length; j++) {
      rowArr.push(twoDArr[i][j]);
    }
    console.log(rowArr);
  }
}

printTwoArr([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
]); */

/* function printSumOfEachRowOf2DArr(twoDArr) {
  for (let i = 0; i < twoDArr.length; i++) {
    let rowArrSum = 0;
    for (let j = 0; j < twoDArr[i].length; j++) {
      rowArrSum += twoDArr[i][j];
    }
    console.log(`${i}th row Sum:`, rowArrSum);
  }
}

printSumOfEachRowOf2DArr([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
]); */

/* function printSumOfEleOf2DArr(twoDArr) {
  let ansSum = 0;
  for (let i = 0; i < twoDArr.length; i++) {
    let rowArrSum = 0;
    for (let j = 0; j < twoDArr[i].length; j++) {
      rowArrSum += twoDArr[i][j];
    }
    ansSum += rowArrSum;
    console.log(`${i}th row Sum:`, rowArrSum);
  }
  console.log("2D Array elements sum:", ansSum);
}

printSumOfEleOf2DArr([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
]); */

/* function printSumOfProductOfRowEleOf2DArr(twoDArr) {
  let ansSum = 0;
  for (let i = 0; i < twoDArr.length; i++) {
    let rowArrMul = 1;
    for (let j = 0; j < twoDArr[i].length; j++) {
      if (i % 2 !== 0) continue;
      rowArrMul *= twoDArr[i][j];
    }
    if (i % 2 !== 0) {
      rowArrMul = 0;
    } else {
      ansSum += rowArrMul;
    }
    console.log(`${i}th row Mul:`, rowArrMul);
  }
  console.log("2D Array elements sum of product of row elements:", ansSum);
}

printSumOfProductOfRowEleOf2DArr([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
]); */

/* function printColumnWise2DArr(twoDArr) {
  for (let i = 0; i < twoDArr[0].length; i++) {
    let colArr = [];
    for (let j = 0; j < twoDArr.length; j++) {
      colArr.push(twoDArr[j][i]);
    }
    console.log(`Column ${i}`, colArr);
  }
}

printColumnWise2DArr([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
]); */

function printPrimaryDiagonalOf2DArr(twoDArr) {
  let diagonal = [];
  // for (let i = 0; i < twoDArr.length; i++) {
  //   for (let j = 0; j < twoDArr[0].length; j++) {
  //     if (i === j) {
  //       diagonal.push(twoDArr[i][j]);
  //     }
  //   }
  // }
  for (let i = 0; i < twoDArr.length; i++) {
    //O(n)
    diagonal.push(twoDArr[i][i]);
  }
  return diagonal;
}

printPrimaryDiagonalOf2DArr([
  [1, 2, 3],
  [6, 7, 8],
  [11, 12, 13],
]);

function printSecondaryDiagonalOf2DArr(twoDArr) {
  let diagonal = [];
  // for (let i = 0; i < twoDArr.length; i++) {
  //   for (let j = 0; j < twoDArr[0].length; j++) {
  //     if (i + j === 2) {
  //       diagonal.push(twoDArr[i][j]);
  //     }
  //   }
  // }
  for (let i = 0; i < twoDArr.length; i++) {
    //O(n)
    diagonal.push(twoDArr[i][twoDArr.length - i - 1]);
  }
  return diagonal;
}

printSecondaryDiagonalOf2DArr([
  [1, 2, 3],
  [6, 7, 8],
  [11, 12, 13],
]);

console.log(
  printPrimaryDiagonalOf2DArr([
    [1, 2, 3],
    [6, 7, 8],
    [11, 12, 13],
  ]).reduce((sum, init) => sum + init, 0) %
    2 ===
    0
    ? "Even"
    : "Odd"
);

// Secondary diagonal formula = i + j == n - 1

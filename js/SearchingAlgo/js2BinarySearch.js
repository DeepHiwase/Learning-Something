// constraint -> Binary Search only works on sorted array
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    }
    if (arr[middleIndex] > target) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));

// O(logn)

function firstOccurance(arr, target) {
  let firstOccIndex = -1;

  let leftIndex = 0;
  let rightIndex = arr.length;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[midIndex] === target) {
      firstOccIndex = midIndex;
      rightIndex = midIndex - 1;
    } else if (target > arr[midIndex]) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }

  return firstOccIndex;
}

console.log(firstOccurance([1, 2, 4, 4, 5, 6, 6, 7], 4));
console.log(firstOccurance([1, 2, 4, 4, 5, 6, 6, 7], 6));
console.log(firstOccurance([1, 1, 1, 1, 1, 1], 1));
console.log(
  firstOccurance(["apple", "banana", "banana", "cherry", "date"], "date")
); // this is sorted string array so it will work
console.log(
  firstOccurance(["apple", "banana", "banana", "cherry", "date"], "banana")
);
// console.log(binarySearch([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-5, 2, 4, 6, 10], 20));

function findLowerAndUpperBoundOfTarget(arr, target) {
  // let lowerBound = -1;
  // let upperBound = -1;

  let firstOccIndex = -1;
  let lastOccurance = -1;

  let start = 0;
  let end = arr.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      firstOccIndex = mid;
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    if (firstOccIndex == -1) firstOccIndex = mid + 1;
  }

  start = 0;
  end = arr.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      if (arr[mid] <= target) {
        if (mid + 1 < arr.length) {
          lastOccurance = mid + 1;
        }
      }
      start = mid + 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return [firstOccIndex, lastOccurance];
}

console.log(findLowerAndUpperBoundOfTarget([1, 2, 5, 6, 7, 8], 4));

function getMissingNumber(setA, setB) {
  let ans = [];
  for (let number of setA) {
    if (!setB.has(number)) {
      ans.push(number);
    }
  }

  return ans;
}

// let ansMap = new Map();
// for (let [key, value] of map) {
//   ansMap.set(key, +value * 2);
// }
// console.log(ansMap)

let ansMap = new Map();
for (let [key, value] of ["Hi", "Bye"]) {
  ansMap.set(key, String(value).toLowerCase());
}
console.log(ansMap)

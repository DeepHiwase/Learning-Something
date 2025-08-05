// constraint -> Binary Search only works on sorted array
function recursiveBinarySearch(arr, target) {
  return searchRecurcivelyForBS(arr, target, 0, arr.length - 1);
}

function searchRecurcivelyForBS(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  if (arr[middleIndex] > target) {
    return searchRecurcivelyForBS(arr, target, leftIndex, middleIndex - 1);
  } else {
    return searchRecurcivelyForBS(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));

// O(logn)

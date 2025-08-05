function recursiveFibnonacci(n) {
  // base case
  if (n === 0 || n === 1) {
    return n;
  }

  return recursiveFibnonacci(n - 1) + recursiveFibnonacci(n - 2);
}

console.log(recursiveFibnonacci(0));
console.log(recursiveFibnonacci(1));
console.log(recursiveFibnonacci(2));
console.log(recursiveFibnonacci(3));
console.log(recursiveFibnonacci(4));
console.log(recursiveFibnonacci(5));

// TC
// O(n) -> for simple iterative 
// O(2^n) -> for recursive 
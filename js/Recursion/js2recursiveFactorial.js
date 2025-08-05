function recursiveFacto(n) {
  // base case
  if (n == 1 || n == 0) return 1;

  return n * recursiveFacto(n - 1);
}

console.log(recursiveFacto(0));
console.log(recursiveFacto(1));
console.log(recursiveFacto(2));
console.log(recursiveFacto(3));
console.log(recursiveFacto(4));
console.log(recursiveFacto(5));

// Big-O -> O(n) TC

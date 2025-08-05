function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let facto = 1;
  for (let i = n; i >= 1; i--) {
    facto *= i;
  }
  return facto;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24

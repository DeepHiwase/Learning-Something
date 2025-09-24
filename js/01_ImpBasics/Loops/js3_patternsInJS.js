// console.log(Math.sqrt(51));

// Global variables
dfg = 0; // not a good practice, but work -> global scope - can be access anywhere

// PRIME Optimised

let N = 117;

let isPrime = true;
// for (let i = 2; i <= Math.floor(Math.pow(N, 0.5)); i++) {
// for (let i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
for (let i = 2; i * i <= N; i++) {
  if (N % i === 0) {
    isPrime = false;
    break;
  }
}

isPrime == true
  ? console.log(N, "is a prime number")
  : console.log(N, "is not a prime number");

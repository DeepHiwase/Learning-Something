// Function

// Q-> Print some text->
/* 
Hello Riya, Welcome to our App
Hello Pratik, Welcome to our Website
Hello Deep, Welcome to our Office
*/

/* function greetGuest(guestName, visitLocation) {
  console.log("Hello " + guestName + ", Welcome to our " + visitLocation);
}

greetGuest("Riya", "App");
greetGuest("Pratik", "Website");
greetGuest("Deep", "Office");
 */
// Q-> Find the greates of two numbers
/* function maxNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(maxNumber(1, 2));

console.log(Math.max(1, 2, 3, 4, 5)); */

// Q-> Min of two numbers
/* function getMinNumber(num1, num2) {
  // 1
  // return Math.min(num1, num2);
  // 2
  // return num1 < num2 ? num1 : num2;
  // 3
  if (num1 < num2) return num1;
  return num2;
}

console.log(getMinNumber(1, 2)); */

// Q-> sum of 2 or three numbers

/* function calcSumOfNumbers(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(calcSumOfNumbers(2, 10));
console.log(calcSumOfNumbers(1, 3, 10)); */

// console.log(Math);
// console.log(Math.);

// Nested day
/* function calulateDays(issuedDate = 0) {
  return 25 - issuedDate;
}

function libraryFine(issuedDate = 0) {
  const daysOfIssuance = calulateDays(issuedDate);

  if (daysOfIssuance > 10) {
    return (daysOfIssuance - 10) * 3;
  } else {
    return 0;
  }
}

console.log("Total Fine: " + libraryFine(2));
console.log("Total Fine: " + libraryFine(12));
console.log("Total Fine: " + libraryFine(22)); */

/* function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i);
  }
}

showPrimes(22); */
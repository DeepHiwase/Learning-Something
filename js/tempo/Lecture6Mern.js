// console.log("Hello World");

// //variables - wrong ways of declaring a variable
// /* - multiline comments
// person1 = "Harsh";
// person1Age = 20;

// person2 = "Riya";
// person2Age = 21;

// //printing something on console
// console.log(person1);
// console.log("Sum of ages of both the Persons:", person1Age + person2Age);
// */

// //correct ways of declaring a variable
// //using let & const

// let person1; //declaration of variable
// person1 = "Harsh"; //intialization / definition of a variable

// // console.log(age); // variable that's declared after this console.log
// // console.log(number);// variable that's never declared

// let person1Age = 20; // declaration and definition of variable
// let age; //uninitialized variable

// console.log("Value of undefined variable 'age': ", age);

// let person2 = "Riya";
// let person2Age = 21;

// console.log(person1);
// console.log("Sum of ages of both the Persons:", person1Age + person2Age);

// //let variables can change their values in future also
// person1 = "Harsh Singh";
// console.log(person1);

// //const variables
// const studentName = "Rahul"; // this value cannot be changes
// // studentName = "Puneet"; gives error
// //const emptyConstVariable; // cannot create uninitialized const variables

// //types of data we can store in const
// //store name
// const employeeName = "Rahul Kumar";

// //store age
// let employeeAge = 30;

// //store Date of birth (dob)
// const dob = "23 - Jan - 2002";

// console.log("Student Name: " + studentName); // adds two strings

// //data type -> type of value a variable holds
// console.log("Checking type of DOB variable: ", typeof dob);
// console.log("Checking type of employeeAge variable: ", typeof employeeAge);

// // various data types in javascript
// // boolean
// const isStudent = true;
// console.log("Checking type of isStudent variable: ", typeof isStudent);

// // string -> refer above dob example

// // number -> refer above employeeAge example

// //JS is dynamically typed language
// let x = "Hi How are you"; // x is of type string
// x = 20; // x is now of type number
// x = false; // x is now of type boolean

// /* ============== Arithmetic Operators ================= */
// let a = 10,
//   b = 20;

// //sum
// let c = a + b;
// console.log("sum of a and b:", c);

// //subtract
// c = b - a;
// console.log("b - a = " + c);

// //multiplication
// c = a * b;
// console.log("a * b = " + c);

// //division
// c = b / a;
// console.log("b/a = " + c);
// c = -4 / 0;
// console.log("-4 / 0 =", c);
// c = 4 / Infinity;
// console.log("4 / Infinity =", c);

// //remainder -> %
// c = a % b;
// console.log("a%b = " + c);

// //power -> **
// c = 2 ** 4;
// console.log("2 raised to power 4: " + c);

// //floor and ceil value of a decimal number
// const decimalNumber = 20.35;
// // 20(floor) < 20.35 < 21 (ceil)
// console.log("floor of 20.35", Math.floor(decimalNumber));
// console.log("ceil of 20.35", Math.ceil(decimalNumber));

// //Q1: convert minutes to seconds and print it
// const minutes = 24;
// //print seconds
// const seconds = minutes * 60;
// console.log("24 minutes has :", seconds, "seconds");

// //Q2: Find last digit of a number
// //Example: number = 234, print 4;
// const number1 = 234;
// //print last digit
// const lastDigit = number1 % 10;
// console.log("Last digit of", number1, "is", lastDigit);

// //Q3: Find second last digit of a number
// const number2 = 234;
// //print second last digit: 3
// //Solution
// // - eleminate last digit
// //      - divide number by 10 and take floor value
// //      - number = 234, number/10 = 23.4 => Math.floor(23.4) = 23;
// // - print number % 10
// const numWithoutLastDigit = Math.floor(number2 / 10);
// const secondLastDigit = numWithoutLastDigit % 10;
// console.log("Second last digit of", number2, "is", secondLastDigit);

// //Q4: Find 3rd last digit of a number in above code
// const numWithoutLastTwoDigits = Math.floor(numWithoutLastDigit / 10);
// const thirdLastDigit = numWithoutLastTwoDigits % 10;
// console.log("Third last digit of", number2, "is", thirdLastDigit);

// /* NOTE:
// - to eliminate the digit we use -> divide(/) operator
// - to extract/print the digit we use -> modulud(%) operator
// - = is also known as assignment operator
// */

// /* Some weird behaviours of Arithmetic operators with strings */

// // Multiply -> except addition, all arithmetic operators convert string to number if possible
// const num = "123";
// const str = "abc";
// let result;

// result = num * 2;
// console.log(result);

// result = num * num;
// console.log(result);

// result = str * 2;
// console.log(result);

// //Addition -> in addition, it prefers the string
// result = num + 2;
// console.log(result);

// /* Weird behaviour in case of decimal addition */
// result = 0.1 + 0.2;
// // -> 0.1 -> convert decimal to binary store as a binary 001010
// // -> retrieve 001010 to convert it to a decimal again
// console.log(result);

// /* Modulus of a negative number */
// result = -31 % 7; // --> -3

// /* power method --> (**) */
// result = Math.pow(2, 5); // works exactly same as 2**5;
// console.log(result);

// /* NEXT CLASS -> precedence and associativity */

// /* Some more arithmetic operators */
// let r = 5;
// r = r + 5; // RHS is calculated first, then it is assigned to LHS
// r += 5; //shorthand
// console.log(r);

// r *= 5;
// console.log(r);

// r = "34";
// r += 26;
// r *= 2;
// console.log(r);

// /**
//  * let
//  * 1. can be initialize or uninitialize
//  * 2. can be reassined
//  * 3. cannot be redlacred
//  */

// /**
//  * const
//  * 1. cannot be uninitialized
//  * 2. cannot be reclared -> but only for primitive datatypes
//  * 3. cannot cb redeclared
//  */

// /**
//  * 1. can br initialized/uninitialized
//  * 2. can be reassined
//  * 3. can be redeclared -> BAD PREACTISE
//  */

// let c = 2 * 4 + (30 / 6) * 5 ** 2;

// let z = "123" + 1; //=>1231

// let num = 4;
// if (num % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// let age = 18;

// if (age >= 18) {
//   console.log("Man you are elegible", "lets drink");
// } else {
//   console.log("No baby, it a juice, you can't drink it");
// }
// -------------------------------------------------------
// // Q. check

// let num = 13;
// let half = num / 2;
// if (half % 2 == 0) {
//   console.log("Even half");
// } else {
//   console.log("Odd half");
// }

//
// let a = 12;
// let b = "12";
// let c = 12;
// if (a == b) {
//   console.log(true, "same value not datatype");
// }

// if (a === c) {
//   console.log(true, "same datatype & value");
// }

// function name(params) {}

// const marksObtained = 80;

// if (marksObtained >= 90) {
//   console.log("A");
// } else if (marksObtained >= 80) {
//   console.log("B");
// } else if (marksObtained >= 70) {
//   console.log("C");
// } else if (marksObtained >= 60) {
//   console.log("D");
// } else {
//   console.log("fail");
// }

// Q

// const age = 1;
// const gender = "male";

// if (age >= 18) {
//   if (gender === "female") {
//     console.log("Mature girl");
//   } else {
//     console.log("mature boy");
//   }
// } else {
//   console.log("chota boy or girl");
// }

// // Q.
// let ticketNumber = 11;
// if (ticketNumber === 11 || ticketNumber === 101) {
//   console.log("Winner");
// } else {
//   console.log("Loser");
// }

// let userLoggedIn = true;
// let hasSubscription = false;

// if (userLoggedIn && hasSubscription) {
//   console.log("Premium user, giving access to premium content");
// } else {
//   console.log("Please upgrade your subscription");
// }

// const num = 17;
// if (num != 17) {
//   console.log("num is not 14");
// } else if (num != 17) {
//   console.log("Num is not 12");
// } else {
//   console.log("Other number");
// }

// const num = "121";

// // const firstNum = Math.floor(num / 100);
// // const lastNum = num % 10;

// const reverse = num.split("").reverse().join("");

// // if (firstNum === lastNum) {
// //   console.log("Palindrome");
// // } else {
// //   console.log("Not a palindrome");
// // }
// if (num === reverse) {
//   console.log("Palindrome");
// } else {
//   console.log("Not a palindrome");
// }

// // // Q.

// let num = 12.5;

// const conversion = Math.ceil(num);

// if (num !== conversion) {
//   console.log("Decimal");
// }

// if (num % 1 != 0) {
//   console.log("Not a Int");
// }

// const a = 10;
// const b = 12;
// let c = 0;
// // let c = a > b ? a : b;
// if (a > b) {
//   // console.log(a);
//   c = a;
// } else {
//   c = b;
// }

// console.log(c);

// console.log(typeof ("34" * " ")); // number as " " -> converts to 0

// let i = process.argv[2];
// let j = process.argv[3];
// console.log(i, j);
// let marks1 = process.argv[2];
// let marks2 = process.argv[3];

// let name1 = "Suresh";
// let name2 = "Ramesh";

// // let highestMarksPerson = "";
// // let highestMarks = 0;

// let marks1 = 40;
// let marks2 = 30;

// // if (marks1 > marks2) {
// //   console.log(name1, "has scored highest no. =", marks1);
// // } else if (marks1 < marks2) {
// //   console.log(name2, "has scored highest no. =", marks2);
// // } else {
// //   console.log("Both Suresh has scored same marks", marks1);
// // }

// // if (marks1 > marks2) {
// //   highestMarksPerson = name1;
// //   highestMarks = marks1;
// // } else {
// //   highestMarksPerson = name2;
// //   highestMarks = marks2;
// // }
// // console.log(highestMarksPerson, " has scored highest no. =", highestMarks);

// let highestMarksPerson = name1;
// let highestMarks = marks1;

// if (marks2 > marks1) {
//   highestMarksPerson = name2;
//   highestMarks = marks2;
// }
// console.log(highestMarksPerson, " has scored highest no. =", highestMarks);

// console.log("Number", num, "is", num % 2 == 0 ? "even" : "odd");

// IMP -> DRY -> Dont Repeat Yourself

// let num = 0;
// console.log(
//   "Number",
//   num,
//   "is",
//   num > 0 ? "positive" : num < 0 ? "Negative" : "zero"
// );

// Q.1❓

// let name1 = "Suresh";
// let name2 = "Ramesh";
// let marks1 = 40;
// let marks2 = 30;
// let highestMarksPerson = marks1 > marks2 ? name1 : name2;
// let highestMarks = marks1 > marks2 ? marks1 : marks2;
// console.log(highestMarksPerson, " has scored highest no. =", highestMarks);

// // Q.2❓

// let num1 = 0;
// let num2 = 2;
// let num3 = 1;

// console.log(
//   "Greatest number between three numbers",
//   num1,
//   num2,
//   num3,
//   "is",
//   num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3
// );

// console.log(Math.max(Math.max(1, 2), Math.max(2, 3)));

// let day = 2;

// console.log(
//   day == 1
//     ? "Monday"
//     : day == 2
//     ? "Tuesday"
//     : day == 3
//     ? "Wednesday"
//     : day == 4
//     ? "Thursday"
//     : day == 5
//     ? "Friday"
//     : day == 6
//     ? "Saturday"
//     : day == 7
//     ? "Sunday"
//     : "Invalid"
// );

// // SWITCH ->
// let day = 2;
// let dayName = "";
// switch (day) {
//   case 0:
//     dayName = "Sunday";
//     break;
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   default:
//     dayName = "Not a day number";
//     break;
// }
// if (dayName === "Not a day number") {
//   console.log("Invalid number");
// } else console.log(dayName);

// grading system
let marks = process.argv[2];
let grades = "";
switch (true) {
  case marks >= 90:
    grades = "A";
    break;
  case marks >= 80:
    grades = "B";
    break;
  case marks >= 70:
    grades = "C";
    break;
  case marks >= 60:
    grades = "D";
    break;
  case marks >= 50:
    grades = "E";
    break;

  default:
    grades = "Fail";
    break;
}

if (grades === "Fail") {
  console.log("You're fail student");
} else {
  console.log(grades);
}

// HW

// const num = 17;
// if (num != 17) {
//   console.log("num is not 14");
// } else if (num != 17) {
//   console.log("Num is not 12");
// } else {
//   console.log("Other number");
// }
num != 17 ? console.log("num is not 14") : console.log("other number");

const num = "121";

const firstNum = Math.floor(num / 100);
const lastNum = num % 10;

// const reverse = num.split("").reverse().join("");

// if (firstNum === lastNum) {
//   console.log("Palindrome");
// } else {
//   console.log("Not a palindrome");
// }
// if (num === reverse) {
//   console.log("Palindrome");
// } else {
//   console.log("Not a palindrome");
// }

num === reverse ? console.log("Palindrome") : console.log("Not a palindrome");

//
// // Q.
let ticketNumber = 11;
ticketNumber === 11 || ticketNumber === 101
  ? console.log("Winner")
  : console.log("Loser");

// Q

let userLoggedIn = true;
let hasSubscription = false;

userLoggedIn && hasSubscription
  ? console.log("Premium user, giving access to premium content")
  : console.log("Please upgrade your subscription");

let number = 13;
let half = number / 2;
half % 2 == 0 ? console.log("Even half") : console.log("Odd half");

let numberGiven = 4;
numberGiven % 2 == 0 ? console.log("even") : console.log("odd");

let age = 18;

age >= 18
  ? console.log("Man you are elegible", "lets drink")
  : console.log("No baby, it a juice, you can't drink it");

// function genericFunc() {
//   const food = "waffle";
//   return function innerFunc() {
//     return "I like " + food;
//   };
// }

// // console.log(genericFunc()());
// const fn = genericFunc();
// console.log(fn());

// -----

// let name = 'Deep2';
// function func1(name) {
//   console.log('name', name);
// }

// func1(name);

// ---- Scope

// {
//   let message = "Hello Deep";
//   console.log(message);
// }
// {
//   let message = "Deep Hello";
//   console.log("message", message);
// }
// if (1) {
//   let phrase = "Deep";
//   console.log(phrase);
// }
// // console.log(phrase)
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log(i)

// function outerFunc() {
//   function innerFunc(params) {
//     console.log("Hello form inner");
//   }
//   innerFunc();
// }

// outerFunc();

// function sayHiBye(firstName, lastName) {
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   console.log("Hi", getFullName());
//   console.log("Bye", getFullName());
// }

// function sayHiBye(firstName, lastName) {

//   // console.log("Hi", getFullName());
//   // console.log("Bye", getFullName());

//   return function getFullName() {
//     return firstName + " " + lastName;
//   }
// }

// console.log(sayHiBye("Deep", "Hiwase")());

// // ---

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   }
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// functionBefore();

// function functionBefore() {
//   console.log('Its still works');
// }

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// ----

// function makeWorker() {
//   let name = "Pete";

//   return function () {
//     console.log(name);
//   }
// }

// let name = "John";

// let work = makeWorker();

// work();

// -----

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   }
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter2());
// console.log(counter2());

// ----

// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   }

//   this.down = function () {
//     return --count;
//   }
// }

// let count = new Counter();
// console.log(count.up())
// console.log(count.up())
// console.log(count.down())

// ----

// ----
// function sum(num) {
//   let numlex = num;

//   return function (num2) {
//     return num2 + numlex;
//   }
// }

// console.log(sum(1)(2))

// ----
let x = 1;

function func() {
  console.log(x);

  let x = 2;
}
func();

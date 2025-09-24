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



// num != 17 ? console.log("num is not 14") : console.log("other number");

// const num = "121";

// const firstNum = Math.floor(num / 100);
// const lastNum = num % 10;


const reverse = num.split("").reverse().join("");

if (firstNum === lastNum) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}
if (num === reverse) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}

num === reverse ? console.log("Palindrome") : console.log("Not a palindrome");

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
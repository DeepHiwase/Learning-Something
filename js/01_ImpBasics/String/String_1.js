// String
// let str = 'Hi\''
// console.log(str);

let str1 = "Hi! how are you";
let wordCount = 0;
for (let i = 0; i < str1.length; i++) {
  if (str1[i] === " " || i + 1 === str1.length) {
    wordCount++;
  }
}
console.log("Word Count:", wordCount);

// Strings are immutable
// includes()
// replace()
// replaceAll()
// trim()
// substring() -> Imp -> if index given is < 0 then converts to 0
// substring(5, 2) if secd index is less than first then it swap index range -> like here |2, 5|
// substr() -> some deprecated thing think so
// slice() -> seem like substring but works different with -ve indices
// repeat()

// .__proto__ -> gives its how is prototype
// chatAt()
// indexOf() -> second optinal paramater is index which tells to find after it in given string
// toLowerCase()
"".toLocaleLowerCase()
console.log("❤️".charAt(0))
console.log("✅".charAt(0))
// console.log("🔴😅".charAt(0))
// console.log("😅".charAt(0))

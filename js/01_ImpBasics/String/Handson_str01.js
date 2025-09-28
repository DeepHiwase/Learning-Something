let string1 = "string1";
let string2 = "string2";
let string3 = `string3 ${1 + 3}`;

let guestList = `Guests:
* John
* Pete
* Deep
`; //<- havinf \n so it will appear in next line

let anotherGuestList = "Guests:\n * John\n *Pete\n *Deep\n";

let str1 = "Hello\nDeep";
let str2 = `Hello
Deep`;
// console.log(str1 == str2); // true
// \', \", \`, \\, \t, \n,
// console.log("My\n".length); //3
// charAt -> O(1)
// console.log("My\n".charAt(-1, -2, -4)); // no errors, only use first index give to search
// console.log("My\n".charAt("wq")); // default gives 0 index ans
// console.log("My\n".charAt([])); // default gives 0 index ans
// console.log("My\n".charAt(["ad"])); // default gives 0 index ans
// console.log('My\n'.charAt(0));
// console.log('My\n'.charAt(2));
// console.log('My\n'.charAt(-2));// doesnot work only gives -1 index ans
// console.log("Hello"[0]); // O(1)
// console.log("Hello"[1]);
// console.log("Hello"[-1]); // not work as start with 0 -> so no -1 by barckets <-
// console.log("Hello".at(0));
// console.log("Hello".at(1)); // O(1)
// console.log("Hello".at(6)); // undefined
// console.log("Hello".at(-1)); // here works -> form last item -> o // O(1)
// console.log("Hello".at(-2)); // here works -> form last 2nd item -> l
// console.log("Hello".at(-6)); // undefined
// console.log("Hello".at("0")); // string

// toUpperCase()
// toLowerCaseCase()
// indexOf()
// includes()
// startsWith()
// endsWith()
// slice() -> returns copy of string sliced one -> O(n) for array due to size of array, -> O(1) for string cause of optimization implemented by chrome and nodejs but may fall back to O(n)
// console.log('stringify'.slice(0));
// console.log('stringify'.slice(1));
// console.log('stringify'.slice(1, 4));
// console.log('stringify'.slice(-1));
// console.log('stringify'.slice(-3));
// console.log('stringify'.slice(-3, -1));
// console.log('stringify'.slice(-3, 0));// nothing prints no swap
// console.log('stringify'.slice(-3, -6));
// console.log('stringify'.slice(5, 2));// not work , not swap, so empty spaces // no error// print nothimg, /// length 0
// console.log('stringify'.slice(5, 2).length);// not work , not swap, so empty spaces with length 0// no error
// console.log('stringify'.slice('4'));//converts to string as it attach + infront to convert likewise
// console.log('stringify'.slice('a')); // converts to 0
// stringify
// tringify
// tri
// y
// ify
// if

// ngify
// stringify

// substring() -> returns new/ not modify original, O(n) length of substring, O(1) due to optimization by v8/nodejs, O(n) space- copy
// console.log("stringify".substring(0));
// console.log("stringify".substring(1));
// console.log("stringify".substring(1, 4));
// console.log("stringify".substring(-1)); // outofbound -> treated as 0 // no negative indexing support
// console.log("stringify".substring(-3)); // outofbound -> treated as 0 , index < 0
// console.log("stringify".substring(-3, -1)); // no error// nothing print , just emptyness,
// console.log("stringify".substring(-3, -1).length); // no error - length 0
// console.log("stringify".substring(-3, -6)); // same no error - nothing prints
// console.log("stringify".substring(5, 2)); // swap // no error, if end is less than start -> 5,2-> |2,5)
// console.log("stringify".substring(5, 2).length);
// console.log("stringify".substring("4")); //converts to string as it attach + infront to convert likewise
// console.log("stringify".substring("-4")); //converts to string as it attach + infront to convert likewise -> -4 -> 0
// console.log("stringify".substring("a")); // -> converts to 0
// stringify
// tringify
// tri
// stringify
// stringify

// 0

// rin
// 3
// ngify
// stringify
// stringify

// substr()

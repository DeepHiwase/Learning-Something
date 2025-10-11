// let set = new Set();
// undefined
// set
// Set(0) {size: 0}[[Entries]]No propertiessize: 0[[Prototype]]: Set
// set.size
// 0
// let john = {name: "John"};
// undefined
// let pete = {name: "Pete"};
// undefined
// let mary = {name: "Mary"};
// undefined
// set.add(john);
// Set(1) {{…}}[[Entries]]0: Objectvalue: {name: 'John'}size: 1[[Prototype]]: Set
// set.add(pete);
// Set(2) {{…}, {…}}
// set.add(mary);
// Set(3) {{…}, {…}, {…}}
// set.add(john);
// Set(3) {{…}, {…}, {…}}[[Entries]]0: Object1: Objectvalue: {name: 'Pete'}2: Objectvalue: {name: 'Mary'}size: 3[[Prototype]]: Set
// set.add(pete);
// Set(3) {{…}, {…}, {…}}
// set.size
// 3
// for (let user of set) {console.log(user.name)};
// VM5499:1 John
// VM5499:1 Pete
// VM5499:1 Mary
// undefined
// let visitors = [];
// undefined
// const visitorToAdd = (visitor) => { const isAlreadyVisit = visitors.find((visitor) => visitor === visitor);  if (!isAlreadyVisit) visitors.push(visitor); }
// undefined
// visitorToAdd(john);
// undefined
// visitors
// [{…}]0: {name: 'John'}length: 1[[Prototype]]: Array(0)
// visitorToAdd(pete);
// undefined
// visitors
// [{…}]0: {name: 'John'}length: 1[[Prototype]]: Array(0)
// const visitorToAdd = (visitor) => { const isAlreadyVisit = visitors.find((visitor) => visitor.name === visitor.name);  if (!isAlreadyVisit) visitors.push(visitor); }
// undefined
// visitorToAdd(john);
// undefined
// visitors
// [{…}]0: {name: 'John'}length: 1[[Prototype]]: Array(0)
// visitorToAdd(pete);
// undefined
// visitors
// [{…}]0: {name: 'John'}length: 1[[Prototype]]: Array(0)
// visitorToAdd(mary);
// undefined
// visitors
// [{…}]0: {name: 'John'}length: 1[[Prototype]]: Array(0)
// const visitorToAdd = (visitor) => { const isAlreadyVisit = visitors.find((visitor) => visitor.name === visitor.name); console.log(isAlreadyVisit);  if (!isAlreadyVisit) visitors.push(visitor); }
// undefined
// visitorToAdd(mary);
// VM6265:1 {name: 'John'}
// undefined
// const visitorToAdd = (visitor) => { const isAlreadyVisit = visitors.find((visitor) => visitor.name === visitor.name); console.log(isAlreadyVisit);  if (!isAlreadyVisit) visitors.push(visitor); }
// undefined
// visitorToAdd(mary);
// VM6287:1 {name: 'John'}
// undefined
// let visitors = [];
// undefined
// visitorToAdd(mary);
// VM6287:1 undefined
// undefined
// visitors
// [{…}]0: {name: 'Mary'}length: 1[[Prototype]]: Array(0)
// visitorToAdd(pete);
// VM6287:1 {name: 'Mary'}
// undefined
// const visitorToAdd = (visitor) => {
//     const isAlreadyVisit = visitors.find((visitor) => visitor.name === visitor.name);
//     console.log(isAlreadyVisit);
//     if (!isAlreadyVisit) visitors.push(visitor);
// }

// let set = new Set(["Oranges", "Apples", "Bananas"]);
// undefined
// for (let value of set) cons
// VM6570:1 Uncaught ReferenceError: cons is not defined
//     at <anonymous>:1:24
// (anonymous) @ VM6570:1
// for (let value of set) console.log(value);
// VM6623:1 Oranges
// VM6623:1 Apples
// VM6623:1 Bananas
// undefined
// set.forEach((value, valueAgain, set) => console.log(value));
// VM6765:1 Oranges
// VM6765:1 Apples
// VM6765:1 Bananas
// undefined
// set.forEach((value) => console.log(value));
// VM6787:1 Oranges
// VM6787:1 Apples
// VM6787:1 Bananas
// undefined
// set.forEach((value, valueAgain, set) => console.log(value, valueAgain, set));
// VM6862:1 Oranges Oranges Set(3) {'Oranges', 'Apples', 'Bananas'}
// VM6862:1 Apples Apples Set(3) {'Oranges', 'Apples', 'Bananas'}
// VM6862:1 Bananas Bananas Set(3) {'Oranges', 'Apples', 'Bananas'}
// undefined

/**
 *
 * @param {string[]} arr
 */
function unique(arr) {
  // let set = new Set(arr);

  // return set.keys();

  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

/**
 * 
 * @param {string[]} arr 
 */
function aclean(arr) {
  
}



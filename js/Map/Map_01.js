// let map = new Map();
// undefined
// map
// Map(0) {size: 0}[[Entries]]No propertiessize: 0[[Prototype]]: Mapclear: ƒ clear()constructor: ƒ Map()delete: ƒ delete()entries: ƒ entries()forEach: ƒ forEach()get: ƒ ()has: ƒ has()keys: ƒ keys()set: ƒ ()size: (...)values: ƒ values()Symbol(Symbol.iterator): ƒ entries()Symbol(Symbol.toStringTag): "Map"get size: ƒ size()[[Prototype]]: Object
// let obj = {};
// undefined
// obj
// {}[[Prototype]]: Object
// obj.size
// undefined
// map.si
// undefined
// map.size
// 0
// map.set('1', 'str1');
// Map(1) {'1' => 'str1'}[[Entries]]0: {"1" => "str1"}key: "1"value: "str1"size: 1[[Prototype]]: Map
// map
// Map(1) {'1' => 'str1'}
// map[0]
// undefined
// map['1']
// undefined
// typeof map
// 'object'
// map.length
// undefined
// map.set(1, 'nim1');
// Map(2) {'1' => 'str1', 1 => 'nim1'}[[Entries]]0: {"1" => "str1"}key: "1"value: "str1"1: {1 => "nim1"}key: 1value: "nim1"size: 2[[Prototype]]: Map
// map.set(true, 'bool1');
// Map(3) {'1' => 'str1', 1 => 'nim1', true => 'bool1'}[[Entries]]0: {"1" => "str1"}1: {1 => "nim1"}2: {true => "bool1"}size: 3[[Prototype]]: Map
// map
// Map(3) {'1' => 'str1', 1 => 'nim1', true => 'bool1'}[[Entries]]0: {"1" => "str1"}1: {1 => "nim1"}2: {true => "bool1"}size: 3[[Prototype]]: Map
// map.size
// 3
// console.log( map.get(1) );
// VM1174:1 nim1
// undefined
// console.log( map.get("1") );
// VM1199:1 str1
// undefined
// console.log( map.get(true) );
// VM1232:1 bool1
// undefined
// map['1']
// undefined
// console.log( map['1'] );
// VM1336:1 undefined
// undefined
// console.log( map[1] );
// VM1363:1 undefined
// undefined
// console.log( map[true] );
// VM1400:1 undefined
// undefined
// map['1'] = 'num2';
// 'num2'
// map
// Map(3) {'1' => 'str1', 1 => 'nim1', true => 'bool1'}[[Entries]]0: {"1" => "str1"}1: {1 => "nim1"}2: {true => "bool1"}1: "num2"size: 3[[Prototype]]: Map
// map.size
// 3
// map['2']
// undefined
// map['1']
// 'num2'
// let john = {name: "John"};
// undefined
// let visitsCountMap = new Map();
// undefined
// //
// undefined
// visitsCountMap.set(john, 123);
// Map(1) {{…} => 123}[[Entries]]0: {Object => 123}key: {name: 'John'}value: 123size: 1[[Prototype]]: Map
// console.log( visitsCountMap.get(john) );
// VM1889:1 123
// undefined
// let ben = {name: "Ben"};
// undefined
// let visitsCountObj = {};
// undefined
// visitsCountObj[john] = 234;
// 234
// visitsCountObj[ben] = 123;
// 123
// cons
// VM2137:1 Uncaught ReferenceError: cons is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM2137:1Understand this error
// console.log( visitsCountObj );
// VM2220:1 {[object Object]: 123}[object Object]: 123[[Prototype]]: Object
// undefined
// console.log( visitsCountObj["[object Object]"] );
// VM2274:1 123
// undefined
// NaN
// NaN
// typeof NaN
// 'number'
// NaN.toString()
// 'NaN'
// NaN.toFixed(12)
// 'NaN'
// NaN === NaN
// false
// map.set(NaN, 'NaN1');
// Map(4) {'1' => 'str1', 1 => 'nim1', true => 'bool1', NaN => 'NaN1'}[[Entries]]0: {"1" => "str1"}1: {1 => "nim1"}2: {true => "bool1"}3: {NaN => "NaN1"}1: "num2"size: 4[[Prototype]]: Map
// map.get(NaN)
// 'NaN1'
// map.set('2', 'Num2').set('3', 'Num3').set('true', true);
// Map(7) {'1' => 'str1', 1 => 'nim1', true => 'bool1', NaN => 'NaN1', '2' => 'Num2', …}[[Entries]]0: {"1" => "str1"}1: {1 => "nim1"}2: {true => "bool1"}3: {NaN => "NaN1"}4: {"2" => "Num2"}5: {"3" => "Num3"}6: {"true" => true}1: "num2"size: 7[[Prototype]]: Map
// map.get('3')
// 'Num3'
// let recipeMap = new Map([['cucumber', 500], ['tomatoes', 350], ['onion', 50]]);
// undefined
// recipeMap
// Map(3) {'cucumber' => 500, 'tomatoes' => 350, 'onion' => 50}[[Entries]]0: {"cucumber" => 500}1: {"tomatoes" => 350}2: {"onion" => 50}size: 3[[Prototype]]: Map
// let mapWithArr = new Map(['num2', 10]);
// VM3073:1 Uncaught TypeError: Iterator value num2 is not an entry object
//     at new Map (<anonymous>)
//     at <anonymous>:1:18
// (anonymous) @ VM3073:1Understand this error
// let mapWithArr = new Map([['num2', 10]]);
// undefined
// mapWithArr
// Map(1) {'num2' => 10}
// for (let vegitable of recipeMap.keys()) { console.log(vegitable); };
// VM3226:1 cucumber
// VM3226:1 tomatoes
// VM3226:1 onion
// undefined
// for (let amount of recipeMap.values()) { console.log(amount); };
// VM3301:1 500
// VM3301:1 350
// VM3301:1 50
// undefined
// for (let entry of recipeMap.entries()) { console.log(entry); };
// VM3380:1 (2) ['cucumber', 500]0: "cucumber"1: 500length: 2[[Prototype]]: Array(0)
// VM3380:1 (2) ['tomatoes', 350]
// VM3380:1 (2) ['onion', 50]
// undefined
// for (let entry of recipeMap) { console.log(entry); };
// VM3399:1 (2) ['cucumber', 500]0: "cucumber"1: 500length: 2[[Prototype]]: Array(0)
// VM3399:1 (2) ['tomatoes', 350]
// VM3399:1 (2) ['onion', 50]
// undefined
// let mapWithObj = new Map([{'1':'num1'}]);
// undefined
// mapWithObj
// Map(1) {undefined => 'num1'}[[Entries]]0: {undefined => "num1"}size: 1[[Prototype]]: Map
// let mapWithObj = new Map([{1:'num1'}]);
// undefined
// mapWithObj
// Map(1) {undefined => 'num1'}[[Entries]]0: {undefined => "num1"}size: 1[[Prototype]]: Map
// let mapWithObj = new Map([{'num1'}]);
// VM3566:1 Uncaught SyntaxError: Unexpected stringUnderstand this error
// let mapWithObj = new Map([{'num1': 'wewe'}]);
// undefined
// mapWithObj
// Map(1) {undefined => undefined}
// recipeMap.forEach((value, key, map) => {console.log(`${key}: ${value}`);};);
// VM3733:1 Uncaught SyntaxError: missing ) after argument listUnderstand this error
// recipeMap.forEach((value, key, map) => {console.log(`${key}: ${value}`);});
// VM3745:1 cucumber: 500
// VM3745:1 tomatoes: 350
// VM3745:1 onion: 50
// undefined
// [1, 2, 3].forEach((value, index, arr) => {console.log(`${index}: ${value}` of ${arr})});
// VM3928:1 Uncaught SyntaxError: missing ) after argument listUnderstand this error
// [1, 2, 3].forEach((value, index, arr) => {console.log(`${index}: ${value} of ${arr}`)});
// VM3943:1 0: 1 of 1,2,3
// VM3943:1 1: 2 of 1,2,3
// VM3943:1 2: 3 of 1,2,3
// undefined
// let obj = {name: "John", age: 30};
// undefined
// let mapWithObjEntries = new Map(Object.entries(obj));
// undefined
// mapWithObjEntries.get('name');
// 'John'

// let prices = Object.fromEntries([['banana', 1], ['orange', 2], ['meat', 4]]);
// undefined
// prices
// {banana: 1, orange: 2, meat: 4}banana: 1meat: 4orange: 2[[Prototype]]: Object
// prices.meat
// 4
// let map = new Map();
// undefined
// map.set('banana', 1);
// Map(1) {'banana' => 1}
// map.set('orange', 2);
// Map(2) {'banana' => 1, 'orange' => 2}
// map.set('maet', 4);
// Map(3) {'banana' => 1, 'orange' => 2, 'maet' => 4}
// let obj = Object.fromEntries(map.entries());
// undefined
// obj
// {banana: 1, orange: 2, maet: 4}
// obj.banana
// 1
// let obj1 = Object.fromEntries(map);
// undefined
// obj1
// {banana: 1, orange: 2, maet: 4}

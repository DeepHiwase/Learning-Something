// let john = {name: "John"};
// undefined
// john = null;
// null
// let array = [john];
// undefined
// john = null;
// null
// let john = {name: "John"};
// undefined
// let array = [john];
// undefined
// arr[0];
// VM332:1 Uncaught ReferenceError: arr is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM332:1Understand this error
// array[0];
// {name: 'John'}
// let john = {name: "John"};
// undefined
// let map = new Map();
// undefined
// map.set(john, "...");
// Map(1) {{…} => '...'}
// john = null;
// null
// map.keys()
// MapIterator {{…}}[[Entries]]0: value: {name: 'John'}constructor: ƒ Iterator()[[Prototype]]: Map Iterator[[IteratorHasMore]]: true[[IteratorIndex]]: 0[[IteratorKind]]: "keys"
// for (let item of map.keys()){console.log(item)};
// VM740:1 {name: 'John'}
// undefined


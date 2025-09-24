// {}
// {}[[Prototype]]: Objectconstructor: ƒ Object()assign: ƒ assign()create: ƒ create()defineProperties: ƒ defineProperties()defineProperty: ƒ defineProperty()entries: ƒ entries()freeze: ƒ freeze()fromEntries: ƒ fromEntries()getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()getOwnPropertyNames: ƒ getOwnPropertyNames()getOwnPropertySymbols: ƒ getOwnPropertySymbols()getPrototypeOf: ƒ getPrototypeOf()groupBy: ƒ groupBy()hasOwn: ƒ hasOwn()length: 2name: "hasOwn"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]is: ƒ is()isExtensible: ƒ isExtensible()isFrozen: ƒ isFrozen()isSealed: ƒ isSealed()keys: ƒ keys()length: 1name: "Object"preventExtensions: ƒ preventExtensions()prototype: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}seal: ƒ seal()setPrototypeOf: ƒ setPrototypeOf()values: ƒ values()arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// {1}
// 1
// typeof {}
// 'object'
// typeof {1}
// VM178:1 Uncaught SyntaxError: Unexpected numberUnderstand this error
// typeof { ()=> {} }
// VM195:1 Uncaught SyntaxError: Unexpected token '('Understand this error
// typeof typeof Number
// 'string'
// typeof Number
// 'function'
// const obj1 = {};
// undefined
// obj1
// {}
// obj1.name = "deep";
// 'deep'
// obj1.name
// 'deep'
// obj1
// {name: 'deep'}name: "deep"[[Prototype]]: Object
// typeof obj1
// 'object'
// typeof obj1.name
// 'string'
// typeof obj1['name']
// 'string'
// const obj2 = new Object();
// undefined
// obj2
// {}

// -----------------
// const user = {
//     name: "deep",
//     age: 22,
// };
// undefined
// user
// {name: 'deep', age: 22}age: 22name: "deep"[[Prototype]]: Object
// user.age
// 22
// typeof user.age
// 'number'
// typeof user[age]
// VM208:1 Uncaught ReferenceError: age is not defined
//     at <anonymous>:1:13
// (anonymous) @ VM208:1Understand this error
// use
// VM242:1 Uncaught ReferenceError: use is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM242:1Understand this error
// user.name
// 'deep'
// alert('user');
// undefined
// alert(user);
// undefined
// alert(user.name);
// undefined
// user.isAdmin = true;
// true
// alert(user.isAdmin);
// undefined
// user
// {name: 'deep', age: 22, isAdmin: true}
// delete user.age
// true
// user
// {name: 'deep', isAdmin: true}
// delete user
// false
// user
// {name: 'deep', isAdmin: true}isAdmin: truename: "deep"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// user.["like birds"] = true;
// VM845:1 Uncaught SyntaxError: Unexpected token '['Understand this error
// user["like birds"] = true;
// true
// user
// {name: 'deep', isAdmin: true, like birds: true}isAdmin: truelike birds: truename: "deep"[[Prototype]]: Object

// ---------
// user.likes_birds = true;
// true
// user
// {name: 'deep', isAdmin: true, like birds: true, likes_birds: true}
// user.$ = "it works";
// 'it works'
// user
// {name: 'deep', isAdmin: true, like birds: true, likes_birds: true, $: 'it works'}
// user.0 = 0
// VM996:1 Uncaught SyntaxError: Unexpected numberUnderstand this error
// user.abc0 = 0
// 0
// user
// {name: 'deep', isAdmin: true, like birds: true, likes_birds: true, $: 'it works', …}$: "it works"abc0: 0isAdmin: truelike birds: truelikes_birds: truename: "deep"[[Prototype]]: Object
// user.abc# = 0;
// VM1049:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// user.0abc = 0;
// VM1097:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// user["#"] = true;
// true
// user
// {name: 'deep', isAdmin: true, like birds: true, likes_birds: true, $: 'it works', …}#: true$: "it works"abc0: 0isAdmin: truelike birds: truelikes_birds: truename: "deep"[[Prototype]]: Object
// user[`#`]
// true

// ----
// undefined
// userName
// 'deep'
// prompt()
// 'skdj'
// typeof prompt
// 'function'
// typeof alert
// 'function'
// typeof confirm
// 'function'
// const ansBool = confirm("Are you sure?");
// undefined
// ans
// VM1470:1 Uncaught ReferenceError: ans is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM1470:1Understand this error
// ansBool
// false
// const ansBool = confirm("Are you sure?");
// undefined
// ansBool
// true

// ----
// let user = {
//     name: "deep",
// }
// undefined
// let key = prompt("What do you want to know about user", "name");
// undefined
// user[key]
// 'deep'
// user.key  -> IMP point to know
// undefined

// -------
// let key = prompt("Property name", "apple");
// undefined
// let fruits = {
//     [key]: 5
// }
// undefined
// fruits.numberKey
// 5
// let fruits = {
//     [key + 'Computed']: 5
// }
// undefined
// fruits.numberKeyComputed
// 5

// let obj = {
//     for: 1,
//     return: 2,
// };
// undefined
// obj.for

// 1
// obj

// {for: 1, return: 2}

// let obj1 = {
//     0: "test",
// }
// undefined
// obj1[0]
// 'test'
// obj1["0"]
// 'test'

// ----
// obj1.__proto__ = 5;
// 5
// obj1.__proto__
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// ----
// obj1.noSuchProperty
// undefined
// alert(obj1.noSuchProperty);
// undefined
// alert(obj1.noSuchProperty === undefined);
// undefined
// "noSuchProperty" in obj1
// false
// obj1.noSuchProperty = "exists";
// 'exists'
// "noSuchProperty" in obj1
// true
// obj1.noSuchProperty = undefined;
// undefined
// alert(obj1.noSuchProperty === undefined);
// undefined
// "noSuchProperty" in obj1
// true

//--------
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };
// undefined
// for (let key in user) {
//     alert(key);
//     alert(user[key]);
// }
// undefined
// for (let prop in user) {
//     alert(prop);
//     alert(user[prop]);
// }
// undefined
// let codes = {
//     "49": "GERMANY",
//     "1": "USA"
// }
// undefined
// codes
// {1: 'USA', 49: 'GERMANY'}
// let orderedWithCreation = {
//     name: "GERMANY",
//     origin: "USA"
// }
// undefined
// orderedWithCreation
// {name: 'GERMANY', origin: 'USA'}

// ----
// user.name = "John";
// 'John'
// user.surname = "Smith";
// 'Smith'
// user.name = "Pete";
// 'Pete'
// user
// {name: 'Pete', surname: 'Smith'}
// delete user.name;
// true
// user
// {surname: 'Smith'}
// function isEmpty(obj) {
//     for (let key in obj) {}
// }
// undefined
// function isEmpty(obj) {
//     let count = 0;
//     for (let key in obj) {
//         count++;
//     }
//     return count > 0;
// }
// undefined
// let schedule = {};
// undefined
// isEmpty(schedule);
// false
// function isEmpty(obj) {
//     let count = 0;
//     for (let key in obj) {
//         count++;
//     }
//     return !(count > 0);
// }
// undefined
// isEmpty(schedule);
// true
// schedule["8:30"] = "get up";
// 'get up'
// isEmpty(schedule);
// false

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

// for (let employee in salaries) {
//      sum += salaries[employee];   
// }
// 390

// function multiplyNumeric(obj) {
//     for (let prop in obj) {
//         if (typeof obj[prop] === 'number') {
//             obj[prop] *= 2;
//         }
//     }
// };
// undefined
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// undefined
// multiplyNumeric(menu);
// undefined
// menu
// {width: 400, height: 600, title: 'My menu'}
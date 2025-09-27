// typeof []
// 'object'
// typeof (() => {})
// 'function'
// typeof (function(){})
// 'function'
// typeof (function(){})()
// 'undefined'
// typeof new Date()
// 'object'
// typeof new Error()
// 'object'

// ----
// Clonning / By Value By Reference
// let message = "Hello";
// undefined
// let phrase = message;
// undefined
// phrase = "214";
// '214'
// message
// 'Hello'

// let user1 = {
//     name: "deep"
// }
// undefined
// let user2 = user1;
// undefined
// user2.name = "3333";
// '3333'
// user1
// {name: '3333'}

// let a = {};
// undefined
// let b = a;
// undefined
// alert(a == b);
// undefined
// alert(a === b);
// undefined

// let a = {};
// undefined
// let b = {};
// undefined
// alert(a == b);
// undefined
// alert(a === b);

// let object1 = {
//     name: "deep",
//     age: 22,
// };
// undefined
// let object2 = {};
// undefined
// for (let key in object1) {
//     object2[key] = object1[key];
// }
// 22
// object2
// {name: 'deep', age: 22}
// object2.name = "jane";
// 'jane'
// object2
// {name: 'jane', age: 22}
// object1
// {name: 'deep', age: 22}

// -----
// Object.assign
// let user = {
//     name: "john"
// }
// undefined
// let permission1 = {canView: true};
// undefined
// let permission2 = {canEdit: true};
// undefined
// Object.assign(user, permission1, permission2);
// {name: 'john', canView: true, canEdit: true}
// user
// {name: 'john', canView: true, canEdit: true}
// Object.assign(user, {name: "jane"});
// {name: 'jane', canView: true, canEdit: true}
// user
// {name: 'jane', canView: true, canEdit: true}

// let user = {
//     name: "john",
//     age: 22
// }
// undefined
// let clone = Object.assign({}, user);
// undefined
// clone
// {name: 'john', age: 22}
// let clone2 = {...user};
// undefined
// clone2
// {name: 'john', age: 22}

// DeepCloning -> cloning nested objects also -> another way -> structuredClone()
// let user = {
//     name: "john",
//     age: 22,
//     sizes: {
//         height: 182,
//         widht: 30,
//     }
// }
// undefined
// user.sizes
// {height: 182, widht: 30}
// // deep cloning
// undefined
// let deepCloned = {};
// undefined
// for (let key in user) {
//     if (typeof user[key] === 'object') {
//         deepCloned[key] = Object.assign({}, user[key]);
//     }
//     deepCloned[key] = user[key];
// }
// {height: 182, widht: 30}
// deepCloned
// {name: 'john', age: 22, sizes: {…}}

// -----
// let user = {
//     name: "john",
//     age: 22,
//     sizes: {
//         height: 182,
//         widht: 30,
//     }
// }
// undefined
// let deepClone = structuredClone(user);
// undefined
// deepClone
// {name: 'john', age: 22, sizes: {…}}

// --- supports ciculer clone
// let user = {};
// undefined
// let user.me = user;
// VM2560:1 Uncaught SyntaxError: Unexpected token '.'
// user.me = user;
// {me: {…}}
// me
// :
// me
// :
// me
// :
// me
// :
// me
// :
// me
// :
// {me: {…}}
// [[Prototype]]
// :
// Object
// [[Prototype]]
// :
// Object
// [[Prototype]]
// :
// Object
// [[Prototype]]
// :
// Object
// [[Prototype]]
// :
// Object
// [[Prototype]]
// :
// Object
// let circulerClone = structuredClone(user);
// undefined
// circulerClone
// {me: {…}}
// me
// :
// me
// :
// me
// :
// {me: {…}}
// [[Prototype]]
// :
// Object
// [[Prototype]]
// :
// Object
// [[Prototype]]
// :
// Object

// fails to clone obj eith property funct
// let userWithFunc = {
//     f: function () {}
// }
// undefined
// let tryDeepClone = structuredClone(userWithFunc);
// VM2874:1 Uncaught DataCloneError: Failed to execute 'structuredClone' on 'Window': function () {} could not be cloned.
//     at <anonymous>:1:20

// sol -> lodash cloneDeep()
var _ = require('lodash');
let userWithFunc = {
  f: function () {},
};
let tryDeepClone = _.cloneDeep(userWithFunc);
console.log(tryDeepClone);

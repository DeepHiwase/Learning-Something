// let user = {
//     name: "john",
// }
// undefined
// user.age = 30;
// 30
// user.sayHi = function() {
//     alert("Hello!")
// }
// ƒ () {
//     alert("Hello!")
// }
// user
// {name: 'john', age: 30, sayHi: ƒ}
// user.sayHi()
// undefined

// shorthand for add methods -> prefer
// user = {
//     sayHi: function() {
//         alert("Hello!");
//     }
// }
// {sayHi: ƒ}
// user = {
//     sayHi() {
//         alert("Hello!");
//     }
// }
// {sayHi: ƒ}
// sayHi
// :
// ƒ sayHi()

// //
// user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         alert("Hello!", this.name);
//     }
// }
// {name: 'John', age: 30, sayHi: ƒ}age: 30name: "John"sayHi: ƒ sayHi()
// user.sayHi()
// undefined
// user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         alert(this.name);
//     }
// }
// {name: 'John', age: 30, sayHi: ƒ}age: 30name: "John"sayHi: ƒ sayHi()
// user.sayHi()
// undefined
// user['sayHi']()

// Arrow func fon't have this - so can be use like thi, object methods have this when assign in objects only or other wise undefine to this or in non-strict mode -> this refres to window obj
// let user = {
//     firstName: "Ilya",

//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// };
// undefined
// user.sayHi()
// const noThisArrow = () => {console.log(this)};
// undefined
// noThisArrow()
// VM1080:1 Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

// Calculator
// const calculator = {
//   // methods
//   read() {
//     this.a = prompt("Value of a", "0");
//     this.b = prompt("Value of b", "0");
//   },
//   sum() {
//     return parseInt(this.a) + parseInt(this.b);
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//   step: 0,
//   up() {
//     this.step++
//     return this
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     return this
//   },
// };
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.down();
// ladder.showStep();

let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
      alert(this.step)
    return this
  },
};
undefined
ladder.up().up().down().showStep().down().showStep();

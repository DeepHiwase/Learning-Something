class MyClass {
  // Class methods
  constructor() {}
  method1() {}
  method2() {}
  method3() {}
}

new MyClass();

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

let user = new User("John");
// user.sayHi();
console.log(typeof User);

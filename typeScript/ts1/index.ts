const audioElement = document.createElement("audio");

audioElement.play();

// document.addEventListener("drag")

const acceptsObj = (obj: { foo: string; bar: number; baz: boolean }) => {};

acceptsObj({ bar: 1, foo: "", baz: true });

const a = null;

// a.toString();

const obj = {};

// const result = obj.foo;

type Album = {
  artist: string;
  title: string;
  year: number;
};

// const album: Album = {
//   artists: "Television",
//   title: "Marguee Brown",
//   year: 1977,
// };

const logUserJobTitle = (user: { job: { title: string } }) => {
  console.log(user.job.title);
};

const exampleUser = {
  job: {
    title: 123,
  },
};

// logUserJobTitle(exampleUser);

let thing = 123;

let otherThing = {
  name: "Alice",
};

const otherObject = {
  ...otherThing,
  thing: "1bc",
};

otherObject.thing;
console.log(otherObject);

let element = document.getElementById("12");

/**
 * Logs the values of an object to the console.
 * @param obj - The object to log.
 * @example
 * ```ts
 * logValues({a: 1, b: 2});
 * // output:
 * // a: 1
 * // b: 2
 * ```
 */
const logValues = (obj: any) => {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
};

/**
 * Adds two number together
 * @name myFunction
 * @description Adding two numbers pass as parameters a, b
 * @param {number} a - first number to add
 * @param {Number} b - second number to add
 * @returns sum of those two number pass as parameter a, b
 * @example
 * ```ts
 * myFunction(1, 2);
 * // output: returns 1 + 2 -> 3
 * ```
 * @since 1.0.0
 * @version 1.0.0
 */
const myFunction = (a: number, b: number) => {
  return a + b;
};

// document

// const filterUsersById = (userIdToFilterBy: string) => {
//   return users.filter((user) => user.id === userIdToFilterBy);
// };

const func = () => {
  const randompercentage = `${(Math.random() * 100).toFixed(2)}%`;

  console.log(randompercentage);
};


let arr: Array<number> = [1, 2, 3];
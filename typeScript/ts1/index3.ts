import type { Animal } from "./shared-types";

const logAlbumInfo = (
  title: string,
  trackCount: number,
  isReleased: boolean
) => {};

logAlbumInfo("Black Gold", 15, false);

let albumTitle: string = "Midnights";
let isReleased = true;
let trackCount: number = 13;

albumTitle = "1989";

let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: bigint = 123n;
let example6: null = null;
let example7: undefined = undefined;

// isReleased = "yes"

albumTitle.toUpperCase();

// let anyVariable: any = "This can be anything!";
// anyVariable();
// anyVariable.deep.property.access;

// type Point = {
//   x: number;
//   y: number;
// };

interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 1, y: 2 });

type ID = number | string;

type UserInputSanatizedString = string;
function sanatizeInput(str: string): UserInputSanatizedString {
  return sanatize(str);
}

let userInput = sanatizeInput(getInput());
userInput = "new input";

function printName(obj: { first: string; last?: string }) {
  if (obj.last === undefined) {
    return;
  }

  console.log(obj.last.toUpperCase());
}
printName({ first: "Bob" });
printName({ first: "Bob", last: "Demon" });

async function getFavoriteNumber(): Promise<number> {
  return 26;
}

let pet: Animal = {
  name: "Karma",
  type: "cat",
};

function getAnimalDescription(animal: Animal) {}

const names = ["Deep", "Archana", "Ajay"];
// const names = [1, 2, 3];
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
names.forEach((s) => console.log(s.toUpperCase()));

/**
 *
 * @param {string | number} id - string or number
 */
function printId(id: string | number) {
  // if (typeof id === 'string') id.
  // if (typeof id === 'number') id.
  // if (typeof id === 'boolean')
  console.log("Your ID is: " + id);
}

printId(123);
printId(123);
// printId({})

function printTextOrNumberOrBool(text: string | number | boolean) {}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" "));
  } else {
    console.log("Hello, " + x);
  }
}

function getFirstThree(x: string[] | string) {
  return x.slice(0, 3); // slice is common in both array and string so no need of narrowing
}

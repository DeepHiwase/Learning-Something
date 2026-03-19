import { createWriteStream } from "fs";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let inputLines = [];
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine() {
  return inputLines[currentLine++];
}

function main() {
  const ws = createWriteStream(); //TODO: to add o/p path

  const resolvedCount = parseInt(readLine().trim(), 10);

}

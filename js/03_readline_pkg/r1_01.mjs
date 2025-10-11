import readline from "node:readline";

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// r1.on("line", (line) => {
//   console.log(line);
// });
r1.on("line", (line1) => {
  r1.on("line", (line2) => {
    // console.log(line);
    const [n, k] = line1.split(" ").map(Number);
    const arr = line2.split(" ").map(Number);

    console.log(n, k, arr);
    r1.close();
  });
});

export default r1;

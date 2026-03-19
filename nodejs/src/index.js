const path = require('path')

process.stdout.write("Hello!\n");

// console.log("Hello world!");
console.error("Oops!");

process.stdin.read();// dont use it, many problems with differnt os so use lib getStandartIn

process.stderr.write("Oh No!");

// /dev/null -> trash can - imediately remove content

// node index.js 1>/dev/null => this is doing stdin code pushes/redirect to /dev/null
// node index.js 2>/dev/null => this is doing stderr code like console.error() pushes/redirect to /dev/null
// node index.js 2>/dev/null 1>&2 => this is doing both error and success code pushes/redirect to /dev/null, 1is redirecting to address to 2 which is going to /dev/null

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([-5, 2, 10, 4, 6], 10));
// console.log(linearSearch([-5, 2, 10, 4, 6], 6));
// console.log(linearSearch([-5, 2, 10, 4, 6], 20));

// Linear Search -> Brute force
// T.C. -> O(n)
// S.C. -> O(1)

// function findtargetPresenceOrNot(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(findtargetPresenceOrNot([-5, 2, 10, 4, 6], 20));

// function findtargetPresenceOrNot(str, target) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findtargetPresenceOrNot("Hello", "e"));
// console.log(findtargetPresenceOrNot("Hello", "f"));
// console.log(findtargetPresenceOrNot("Hello", "o"));

// let users = [
//   { id: 1, firstName: "DeepHiwase", age: 23, city: "Amt", slogan: "Wallah" },
//   { id: 2, firstName: "Deepak", age: 22, city: "Pune", slogan: "Wallah" },
//   { id: 3, firstName: "Deepali", age: 2, city: "Mumbai", slogan: "Wallah" },
//   { id: 4, firstName: "DeepSingh", age: 3, city: "Jaipur", slogan: "Wallah" },
//   { id: 5, firstName: "DeepHiwase", age: 22, city: "Goa", slogan: "Wallah" },
// ];

// function findUser(objArr, target) {
//   let ans = [];
//   for (let i = 0; i < objArr.length; i++) {
//     if (objArr[i].firstName === "DeepHiwase") {
//       ans.push(objArr[i]);
//     }
//   }
//   return ans;
// }

// console.log(findUser(users, "DeepHiwase"));

// map -> map function

// let myMap = new Map();

// myMap.set("name", "DeepHiwase");
// myMap.set("age", 22);
// myMap.set("name", "DeepHiwase");
// console.log(myMap.get("name"));

// console.log(myMap);
// console.log(myMap.has("name"));
// console.log(myMap.delete("name"));
// console.log(myMap.size);
// console.log(myMap.clear());
// console.log("-----------");
// myMap.forEach((value, key, map) => {});

// const mapArr = new Map();

// function countFrequency(arr) {
//   const map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//       let updatedCount = map.get(arr[i]) + 1;
//       map.set(arr[i], updatedCount);
//     } else {
//       map.set(arr[i], 1);
//     }
//   }

//   return map;
// }

// // console.log(countFrequency([10, 20, 10, 30, 40, 50, 50, 30]));
// console.log(countFrequency("Hello World!".replace(" ", "")));
// console.log(countFrequency("HHHHHHHH"));

// // Set -> removes duplicates in set when adding and find it s occurance
// let fruits = new Set();

// fruits.add("Apple");
// fruits.add("Banana");
// fruits.add("Apple");

// console.log(fruits);
// console.log(fruits.has("Apple"));
// fruits.delete("Apple");
// console.log(fruits);

// let arr1 = [1, 2, 3, 2, 3, 5, 1, 3, 2];
// console.log([...new Set(arr1)]);

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(isAnagram("Hello", "world"));
// console.log(isAnagram("Hello", "elloH"));

function isAnagramWithLessTC(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freqCounter = {};

  for (let char of str1) {
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!freqCounter[char]) {
      return false;
    }
    freqCounter[char] -= 1;
  }

  return true;
}

console.log(isAnagramWithLessTC("listen", "silent"));
console.log(isAnagramWithLessTC("listen", "hello"));
console.log(isAnagramWithLessTC("hello", "helo"));

// ---
// T.C.:- O(n)
// S.C:- O(n)
function removeDuplicates(str) {
  let seen = new Set();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!seen.has(ch)) {
      result += ch;
      seen.add(ch);
    }
  }

  return result;
}


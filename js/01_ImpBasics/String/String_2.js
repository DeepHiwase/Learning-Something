// split()
// console.log("hi my name is  deep");
// console.log("hi my name is  deep".split()); // whole string
// console.log("hi my name is  deep".split(""));
// console.log("hi my name is  deep".split(" "));
// console.log("hi my name is  deep".split("  "));
// console.log("hi my name is  deep".split("   "));
// console.log("hi my name is    deep".split("   "));
// console.log("hi my name is  deep".split(' ', 3));//limiter -> to return no. of words in return arr

// join()

// ----
/**
 *
 * @param {String} str
 */
function toggleCasing(str) {
  if (str === undefined || str === null) return `Not acceptable value ${str}`;
  if (str.length == 0) return "";

  const originalStr = str;

  let ans = "";
  for (let i = 0; i < originalStr.length; i++) {
    if (originalStr.charCodeAt(i) >= 65 && originalStr.charCodeAt(i) <= 90) {
      ans += originalStr[i].toLowerCase();
    } else if (
      originalStr.charCodeAt(i) >= 97 &&
      originalStr.charCodeAt(i) <= 122
    ) {
      ans += originalStr[i].toUpperCase();
    } else {
      ans += originalStr[i];
    }
  }
  // since its not case sensitive - so directly use 'a'-'z' to compare
  // for (let i = 0; i < originalStr.length; i++) {
  //   if (originalStr[i] >= "A" && originalStr[i] <= "Z") {
  //     ans += originalStr[i].toLowerCase();
  //   } else if (originalStr[i] >= "a" && originalStr[i] <= "z") {
  //     ans += originalStr[i].toUpperCase();
  //   } else {
  //     ans += originalStr[i];
  //   }
  // }

  // not remember method
  // for (let i = 0; i < originalStr.length; i++) {
  //   if (originalStr[i] === originalStr[i].toUpperCase()) {
  //     ans += originalStr[i].toLowerCase();
  //   } else if (originalStr[i] === originalStr[i].toLowerCase()) {
  //     ans += originalStr[i].toUpperCase();
  //   } else {
  //     ans += originalStr[i];
  //   }
  // }

  return ans;
}

// console.log(toggleCasing("HelLo"));
// console.log(toggleCasing("12333"));
// console.log(toggleCasing("sadjkb232hNNNKD"));
// console.log(toggleCasing(undefined));

// console.log("".charCodeAt(0)); // NaN
// console.log(" ".charCodeAt(0)); // 32
// console.log("2".charCodeAt(0)); // 50
// console.log(String.fromCharCode(90, 91, 92, 93, 94, 95, 96, 97, 98)); // 32

// ❌
// function convertCamelCaseToSnakeCase(str) {
//   if (str === undefined || str === null) return `Not acceptable value ${str}`;
//   if (str.length == 0) return "";

//   const originalStrArr = str;

//   let ansArr = [];
//   for (let i = 0; i < originalStrArr.length; i++) {
//     if (
//       originalStrArr.charCodeAt(i) >= 65 &&
//       originalStrArr.charCodeAt(i) <= 90
//     ) {
//       ansArr.push(originalStrArr[i].toLowerCase());
//       ansArr.splice(i-1, 0, "_");
//     } else {
//       ansArr.push(originalStrArr[i]);
//     }
//   }

//   return ansArr.join("");
// }

// console.log(convertCamelCaseToSnakeCase("camelCase"));
// console.log(convertCamelCaseToSnakeCase("camelCaseWahh"));

// function convertSnakeCaseToCamelCase(str) {
//   if (str === undefined || str === null) return `Not acceptable value ${str}`;
//   if (str.length == 0) return "";

//   const originalStrArr = str;

//   let ansArr = [];
//   let isUnderscoreFound = false;
//   for (let i = 0; i < originalStrArr.length; i++) {
//     if (originalStrArr[i] === "_") {
//       isUnderscoreFound = true;
//       continue;
//     } else {
//       if (isUnderscoreFound) {
//         ansArr.push(originalStrArr[i].toUpperCase());
//         isUnderscoreFound = false;
//         continue;
//       }
//       ansArr.push(originalStrArr[i]);
//     }
//   }

//   return ansArr.join("");
// }

// console.log(convertSnakeCaseToCamelCase("snake_case"));
// console.log(convertSnakeCaseToCamelCase("snake_case_wahh"));

// let str = "  How_are_you_in Jungle! ";
// let a = str.trim().split(" ");
// console.log(a[1].slice(0, -1));

// parseInt()
// parseFloat()

// console.log(
//   "Hi are you in Spain, which city are you in? How's your pain?"
//     .replace("Spain", "#")
//     .replaceAll("in", "on")
//     .replace("#", "Spain")
// );

// let palindromicQ = "Natan";
// console.log(
//   `Is ${palindromicQ} is palindrome or not: ${
//     palindromicQ.toLowerCase() ===
//     palindromicQ.toLowerCase().split("").reverse().join("") // O(n)
//   }`
// );

// for (let i = 0; i < palindromicQ.length; i++) {
//   if (palindromicQ[i] !== palindromicQ[n - 1 - i]) return false;
// }

// let palindromicQ = 'Nurses Run'
// console.log(
//   `Is ${palindromicQ} is palindrome or not: ${
//     palindromicQ.toLowerCase().replaceAll(" ", "") ===
//     palindromicQ.toLowerCase().replaceAll(" ", "").split("").reverse().join("") // O(n)
//   }`
// );

// function getLongestWord(str) {

// }

// lastIndexOf

// let str1 = "stringMethodsring";
// function getFirstRepeatingChar(str1) {
//   for (let i = 0; i < str1.length; i++) {
//     let firstIndex = str1.indexOf(str1[i]);
//     let lastIndex = str1.lastIndexOf(str1[i]);

//     if (firstIndex === lastIndex) {
//       console.log(str1[i]);
//       return;
//     }
//   }
//   console.log('No repeating character');
// }

// getFirstRepeatingChar(str1);

function getFrequencyOfEashChar(str) {
  // const set = new Set(str);

  // return set;
  let frequecnyObj = {};
  for (let i = 0; i < str.length; i ++) {
    // if (!frequecnyObj[str[i]]) {
    //   frequecnyObj[str[i]] = 0 
    // } else {
    //   frequecnyObj[str[i]] += 1;
    // }
    
    frequecnyObj[str[i]] = (frequecnyObj[str[i]] || 0) + 1;
  }
  return frequecnyObj;
}

console.log(getFrequencyOfEashChar("nscnnkdnksdkncehe"))

// try frequency of word
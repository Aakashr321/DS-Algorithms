/* 
Write a function called sameFrequency. Given 
two positive integers, find out if two numbers
have the same frequency of digits.
*/

function sameFrequency(num1, num2) {
  let temp = {};

  while (num1 !== 0) {
    let first = num1 % 10;

    temp[first] = temp[first] + 1 || 1;
    num1 = Math.floor(num1 / 10);
  }

  while (num2 !== 0) {
    let second = num2 % 10;

    if (temp[second]) {
      temp[second] -= 1;
    } else {
      return false;
    }
    num2 = Math.floor(num2 / 10);
  }
  return true;
}

console.log(sameFrequency(121, 211)); //true

/* function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
} */

/* Implement a function called, areThereDuplicates which accepts a variable
number of arguments, and checks whether there are duplicates among the
arguments passed in.
*/

// Frequency Counter solution
function areThereDuplicates(...numbers) {
  const temp = {};
  for (let el of numbers) {
    temp[el] = temp[el] + 1 || 1;
  }

  for (let key in temp) {
    if (temp[key] > 1) {
      return true;
    }
  }
  return false;
}

// Multiple pointer solution

function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// OneLinerSolution
function areThereDuplicates(...arguments) {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates("a", "b", "c", "a")); //true
console.log(areThereDuplicates(1, 2, 2)); //true

/* Write a function called constructNote, which accepts two strings,
a message and some letters. The function should return true if the
message can be built with the letters that you are given, or it
should return false
*/

// Wrong solution
function constructNote(str1, str2) {
  let temp = {};

  for (let char of str2) {
    temp[char] = temp[char] + 1 || 1;
  }

  for (let char of str1) {
    if (temp[char]) {
      temp[char] -= 1;
    } else {
      return false;
    }
  }
  return true;
}
// Correct Solution
function constructNote(message, letters) {
  var frequency = {};
  var frequencyM = {};

  for (let i = 0; i < letters.length; i++) {
    frequency[letters[i]] = ++frequency[letters[i]] || 1;
  }

  for (let i = 0; i < message.length; i++) {
    frequencyM[message[i]] = ++frequencyM[message[i]] || 1;
  }

  for (let k in frequencyM) {
    if (!frequency[k]) return false;
    if (frequencyM[k] > frequency[k]) return false;
  }

  return true;
}

console.log(constructNote("aa", "abc")); //false
console.log(constructNote("abc", "dcba")); //true
console.log(constructNote("aabbcc", "bcabcaddff")); //true

/* Given an array of positive integers, some elements
appears twice and others appear once. Fid all the elements
that appear twice in this array. Note that you can return the
elements in any order.
*/

function findAllDuplicates(array) {
  let temp = {};
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    temp[array[i]] = temp[array[i]] + 1 || 1;
  }

  for (let key in temp) {
    if (temp[key] > 1) {
      newArray.push(parseInt(key));
    }
  }
  return newArray;
}

// Solution with set

function findAllDuplicates(nums) {
  let ans = [];
  var s = new Set();
  for (let i = 0; i < nums.length; i++) {
    s.has(nums[i]) ? ans.push(nums[i]) : s.add(nums[i]);
  }
  return ans;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1

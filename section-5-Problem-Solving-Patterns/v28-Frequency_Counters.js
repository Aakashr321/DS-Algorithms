/* Frequency Counters */

/* This pattern users objects or sets to collect values/frequencies of values */

/* This often can avoid the need for O(N^2) operations with arrays/strings. */

/* Write a function called same, which accepts two arrays.
    The function should return true if every value in the
    array has it's corresponding value squared in the second
    array. The frequency of values must be the same.
*/

//naive Solution : Time Complexity O(N^2)

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// console.log(same([1, 2, 1], [1, 4, 1]));
// console.log(same([1, 2, 3, 2, 2], [9, 1, 4, 4, 6]));

// Frequency counter pattern Refactored code
// Time complexity On

// function isSame(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isSame([1, 2, 3, 2, 2], [9, 1, 4, 4, 6]));

/* Given two strings, write a function to determine if the 
    second string is the anagram of the first. An anagram is
    a word, phrase, or name formed by rearranging the letters
    of another, such as cinema, formed from iceman.
*/

// function isAnagram(str1, str2) {
//   if (str1.split("").sort().join("") !== str2.split("").sort().join("")) {
//     return false;
//   }
//   return true;
// }

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = {};

  for (let el of str1) {
    obj1[el] = obj1[el] + 1 || 1;
  }
  for (let el of str2) {
    if (!obj1[el]) {
      return false;
    } else {
      obj1[el] -= 1;
    }
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram"));

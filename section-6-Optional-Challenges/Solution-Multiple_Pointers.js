/* 
Write a function called averagePair. Given a sorted array of integers
and a target average, determine if there is a pair of values in the array
where the average of the pair equals the target average. There may be more than
one pair that matches the average target
*/

function averagePair(array, num) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let average = (array[left] + array[right]) / 2;
    if (average === num) {
      return true;
    } else if (average < num) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

/* Write a function called isSubsequence which takes in two strings
and check whether the characters in the first string form a subsequence
of the characters in the second string. In other words, the function should 
check whether the characters in the first string appear somewhere in the second.
*/

// function isSubsequence(str1, str2) {
//   let i = 0;
//   let j = 0;

//   if (!str1) return true;

//   while (j < str2.length) {
//     if (str1[i] === str2[j]) {
//       i++;
//     }
//     if (i === str1.length) {
//       return true;
//     }
//     j++;
//   }
//   return false;
// }

function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false

/* 
Given an unsorted array and a number n, find if
there exists a pair of elements in the array
whose difference is n. This function should return 
true if the pair exists or false if it does not.
*/

// function findPair(arr, n) {
//   var s = new Set(arr.map((e) => Math.abs(e - n)));
//   if (n === 0 && s.size === arr.length) return false;
//   for (let i = 0; i < arr.length; i++) {
//     if (s.has(arr[i])) return true;
//   }
//   return false;
// }

// Multiple pointer solution

function findPair(arr, num) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(num)) {
      return true;
    } else if (arr[j] - arr[i] < num) {
      j++;
    } else {
      i++;
    }
  }
  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true

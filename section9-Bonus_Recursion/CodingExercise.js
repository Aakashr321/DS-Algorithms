/* Write a recursive function called reverse
which accepts a string and returns a new string in reverse. */

function reverse(str) {
  if (str.length === 0) return "";

  return reverse(str.substr(1)) + str.charAt(0);
}

function reverseString(str) {
  if (!str.length) return "";
  return reverseString(str.slice(1)) + str.charAt(0);
}

function reverseStr(str) {
  if (str.length <= 1) return str[0];
  return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1));
}

/* Write a recursive function called isPalindrome which
returns true if the string passed to is is a palindrome
(reads the same forward and backward). Otherwise it returns false. */

function isPalindrome(str) {
  if (str.length === 1) return true;

  if (str.length === 2) return sr[0] === str[1];

  if (str[0] === str[-1]) return isPalindrome(str.slice(1, -1));
  return false;
}

/* Write a recursive function called someRecursive
which accepts an array and a callback. The function
returns true if a single value in the array returns 
true when passed to the callback. Otherwise it returns
 false*/

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;

  if (callback(arr[0])) return true;

  return someRecursive(arr.slice(1), callback);
}

/* Write a function called flatten which accepts
an array of arrays and returns a new array with 
all values flattened */

function flatten(array) {
  let result = [];
  array.forEach((arr) => {
    if (Array.isArray(arr)) {
      return result.push(...flatten(arr));
    } else {
      result.push(arr);
    }
  });
  return result;
}

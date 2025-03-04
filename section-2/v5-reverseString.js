// Implementation 1 : in built function

/* function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("abcde")); */

// Implementation 2 : for loop with push and pop

/* function reverseString(str) {
  let oldString = str.split("");
  let updatedString = [];

  for (let i = 0; i < str.length; i++) {
    updatedString.push(oldString.pop());
  }
  return updatedString.join("");
}
console.log(reverseString("abcde")); */

// Implementation 3 :  Decrementing for-loop with concatenation

/* function reverseString(str) {
  let updatedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    updatedString += str[i];
  }

  return updatedString;
}

console.log(reverseString("abcde")); */

// Implementation 4 : Incrementing/decrementing for-loop with two arrays

/* function reverse(s) {
  var o = [];
  for (var i = s.length - 1, j = 0; i >= 0; i--, j++) o[j] = s[i];
  return o.join("");
}

console.log(reverseString("abcde")); */

// Implementation 5 : Incrementing for-loop with array pushing and charAt

/* function reverseString(str) {
  let updatedArray = [];

  for (let i = 0; i <= str.length; i++) {
    updatedArray.push(str.charAt(str.length - i));
  }
  return updatedArray.join("");
}
console.log(reverseString("abcde")); */

//Implementation 6 : Recursion with substring and charAt (Important)

function reverseString(str) {
  if (str === "") {
    return "";
  }

  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("abcde"));

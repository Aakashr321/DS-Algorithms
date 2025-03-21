/* Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter
of each string in the array. */

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].slice(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));

  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

/* Write a recursive function called nestedEvenSum.
Returns the sum of all even numbers in an object which
may contain nested objects. */

function nestedEvenSum(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

/* Write a recursive function called capitalizeWords.
Given an array of words, return a new array containing 
each word capitalized */

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

/* Write a function called stringifyNumbers which 
takes in an object and finds all of the values which
are numbers and converts them to strings. Recursion
would be a great way to solve this*/

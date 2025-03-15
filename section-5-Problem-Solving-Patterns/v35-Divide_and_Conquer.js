/* 
Divide and Conquer Pattern
*/

/* This pattern involves dividing a data set into smaller
chunks and then repeating a process with a subset of data.
*/

/* This pattern can tremendously decrease time complexity. */

/* 
Given a sorted array of integers, write a function 
called search, that accepts a value and returns the
index where the value passed to the function is located.
If the value is not found, return -1.
*/

console.log(search([1, 2, 3, 4, 5, 6], 4)); //3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); //-1

/* Using linear search : Time complexity O(N) */

/* function search(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return i;
    }
  }
  return -1;
} */

/* Using binary search : Time complexity OLog(N) */

function search(array, number) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (number < array[middle]) {
      max = middle - 1;
    } else if (number > array[middle]) {
      min = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

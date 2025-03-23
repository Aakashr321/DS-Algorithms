/* Searching Algorithms */

/* Major there are two types of searching algorithms
1. Linear Search : O(N)
2. Binary Search : O(LogN)
*/

/* Linear search pseudocode
=> This function accepts an array and a value
=>Loop through the array and  check if the current
array element is equal to the value 
=> If it is , return the index at which the element
is found.
=> If the value is never found, return -1
*/

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 5));

function recursiveLinearSearch(array, item, index = 0) {
  if (index >= array.length) return -1;

  if (array[index] === item) {
    return index;
  }
  return recursiveLinearSearch(array, item, index + 1);
}

console.log(recursiveLinearSearch([1, 2, 3, 4, 5, 6, 7], 8));

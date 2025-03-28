/* Binary Search */

// Binary search only works on sorted array

/*Binary Search Pseudo code

=> This function accepts a sorted array and a value
=> Create a left pointer at the start of the array, 
and a right pointer at the end of the array
=> While the left pointer comes before the right pointer:
>Create a pointer in the middle
>If you find the value you want, return the index
>If the value is too small, move the left pointer up
>If the value is too large, move the right pointer down
*/

function findVal(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    if (num < arr[middle]) {
      right = middle - 1;
    } else if (num > arr[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(findVal([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (num === arr[middle]) {
      return middle;
    } else if (num < arr[middle]) {
      right = middle - 1;
    } else if (num > arr[middle]) {
      left = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

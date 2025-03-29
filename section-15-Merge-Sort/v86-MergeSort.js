/* Merge Sort */

/* 

=> It's a combination of three things - splitting , merging and sorting.|
=> Exploits the fact that the arrays of 0 or 1 elements are always sorted.
=> Works by decomposing an array into smaller arrays of 0 or 1 elements,
   then building up a newly sorted array.

*/

/* Merging Arrays 
=> In order to implement merge sort, it's useful to first implement
a function responsible for merging two sorted arrays.
=> Given two arrays which are sorted, this helper function should
create a new array which is also sorted, and consists of all of 
the elements in the two input arrays
=> This function should run in O(n + m) time and O(n + m) space 
and should not modify the parameters passed to it.
*/

/* Merging arrays pseudocode 
=> Create an empty array, take a look at the smallest values in each input array
=> While there are still values we haven't looked at..
    >If the value in the first array is smaller than the value
    in the second array, push the value in the first array into our 
    results and move on to the next value in the first array.
    >If the value in the first array is larger than the value in 
    the second array, push the value in the second array into our 
    results and move on to the next value in the second array.
    > Once we exhaust one array, push in all the remaining values 
    from the other array.
*/

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

/* Merge sort pseudocode 
=> Break up the array into halves until you have arrays that
 are empty or have one element.
 => Once you have smaller sorted arrays, merge those arrays
 with other sorted arrays until you are back at the full
 length of the array.
 => Once the array has been merged back together, return the
 merged(and sorted!) array
*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));

function merge(arr1, arr2, comparator) {
  // Default comparator for numbers in ascending order
  if (!comparator) {
    comparator = (a, b) => a - b;
  }

  const mergedArray = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Traverse both arrays and merge them
  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) <= 0) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1, add them
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2, add them
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage:
var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];
console.log(merge(arr1, arr2)); // [1, 2, 3, 4, 4, 5, 6, 8]

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
console.log(merge(arr3, arr4)); // [-3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8]

var arr5 = [3, 4, 5];
var arr6 = [1, 2];
console.log(merge(arr5, arr6)); // [1, 2, 3, 4, 5]

var names = ["Bob", "Ethel", "Christine"];
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]

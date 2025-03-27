/* Selection Sort */

/* Similar to bubble sort, but instead of 
placing large values into the sorted position,
it places small values into sorted position. */

/* Selection sort Pseudo Code
=> Write a function that takes an array as an argument
=> Store the first element as the smallest value you've seen so far.
=>Compare this item to the next item in the array until you find a smaller number
=> If a smaller number is found, designate that smaller number to be the new "minimum"
 and continue until the end of the array
 =>If the "minimum" is not the value(index) you initially began with, swap the two values.
 => Repeat this with the next element until the array is sorted.
*/

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const newSwap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestIdx] > arr[j]) {
        smallestIdx = j;
      }
    }
    if (smallestIdx !== i) {
      swap(arr, smallestIdx, i);
    }
  }
  return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1]));

function selectionSort(arr, compareFn) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i; // Assume the current index is the smallest

    // Compare the assumed smallest with the rest of the array
    for (let j = i + 1; j < length; j++) {
      if (
        compareFn
          ? compareFn(arr[j], arr[minIndex]) < 0
          : arr[j] < arr[minIndex]
      ) {
        minIndex = j; // Update minIndex if a smaller element is found
      }
    }

    // If the minimum index is not the current index, swap them
    if (minIndex !== i) {
      newSwap(arr, i, minIndex);
    }
  }
  return arr;
}

// Example usage
console.log(selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(selectionSort([1, 2, 3])); // [1, 2, 3]
console.log(selectionSort([])); // []

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(selectionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(selectionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age; // Sort by age in descending order
}

console.log(selectionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order

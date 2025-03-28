/* Insertion Sort */

/* Build up the sort by gradually creating a
larger left half which is always sorted. */

/* Insertion Sort Pseudocode
=>Write a function that takes an unsorted array.
=>Start by picking the second element in the array.
=>Now compare the second element with the one before
it and swap if necessary.
=>Continue to the next element and if it is in the incorrect
order, iterate through the sorted portion (i.e. the left
side) to place the element in the correct place.
=> Repeat until the array is sorted.
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    for (j; j >= 0 && arr[j] > currentVal; j--) {
      console.log(arr[j + 1], arr[j]);
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));

function insertionSort(arr, comparator) {
  // Default comparator for numbers
  if (!comparator) {
    comparator = (a, b) => a - b;
  }

  // Start from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than current,
    // to one position ahead of their current position
    while (j >= 0 && comparator(arr[j], current) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage:
console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(insertionSort([1, 2, 3])); // [1, 2, 3]
console.log(insertionSort([])); // []

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(insertionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(insertionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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
  return b.age - a.age;
}

console.log(insertionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order

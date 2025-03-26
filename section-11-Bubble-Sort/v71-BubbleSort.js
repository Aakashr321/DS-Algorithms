/* Bubble Sort */
/* A sorting algorithm where the largest values
bubble up to the top ! */

// ES5
function oldSwap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const newSwap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/* 
BubbleSort Pseudocode
=> Write a function called bubbleSort which takes an array
=> Start looping from with a variable called i the end of 
array towards the beginning
=> Start an inner loop with a variable called j from the 
beginning until i-1 
=>If arr[j] is greater that arr[j + 1], swap those two values
=> Return the sorted array
*/

// Naive solution
function naiveBubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        newSwap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(naiveBubbleSort([1, 81, 4, 6]));

// Proper bubble sort

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        oldSwap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([34, 7, 23, 32, 5, 62]));
console.log(bubbleSort([-10, 2, 0, -5, 3, 8, -1]));
console.log(bubbleSort([3.14, 2.71, 1.41, 1.73, 0.577]));

function optimizedBubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let swapped = false; // Flag to check if a swap occurred
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        oldSwap(arr, j, j + 1);
        swapped = true; // Set the flag to true if a swap occurs
      }
    }
    if (!swapped) break; // If no swaps occurred, the array is sorted
  }
  return arr;
}

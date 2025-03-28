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

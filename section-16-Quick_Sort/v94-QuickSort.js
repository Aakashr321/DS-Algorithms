/* Quick Sort */

/*
=> Like merge sort, it exploits the face that arrays of 
0 or 1 element are always sorted.
=> Work by selecting one element (called the  "pivot") 
and finding the index where the pivot should end up in 
the sorted array.
=> Once the pivot is positioned appropriately, quick sort
can be applied on either side of the pivot.
*/

/* Pivot Helper :
=> In order to implement quick sort, it's useful to first implement
a function responsible for arranging elements in an array on either 
side of a pivot.
=> Given an array, this helper function should designate an element 
as the pivot.
=> It should then rearrange elements in the array so that all values 
less than the pivot are moved to the left of the pivot, and all values 
greater than the pivot are moved to the right of the pivot.
=> The order of the elements on either side of the pivot doesn't matter.
=> The helper should do this in place, that it it should not create a new 
array.
=> When complete, the helper should return the index of the pivot.
=> The runtime of the quick sort depends in part on how one selects the pivot.
=> Ideally, the pivot should be chosen so that it's roughly the median
value in the data set your'e sorting.
=> For simplicity, we'll always choose the pivot to be the first element.
*/

/* Pivot Pseudocode
=> Write a function called pivot or partition.
=> It will help to accept three arguments: an array, a start index,
and an end index (these can default to 0 and the array length - 1 , respectively)
=> Grab the pivot from the start of the array
=> Store the current pivot index in a variable (this will keep track of 
where the pivot should end up)
=> Loop through the array from the start until the end
    > If the pivot is greater than the current element, increment the
    pivot index variable and then swap the current element with the 
    element at the pivot index
=> Swap the starting element(i.e. the pivot) with the pivot index
=> Return the pivot index
*/

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function partition(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

/* Quick Sort Pseudocode
=> Call the pivot helper on the array
=> When the helper returns to you the updated
pivot index, recursively call the pivot helper 
on the subarray to the left of that index, and the 
subarray to the right of that index.
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = partition(arr, left, right);

    //left
    quickSort(arr, left, pivotIdx - 1);

    //right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([5, 48, 3, 4, 78, 91, 45, 66, 1, 52, 15]));

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  const pivotValue = arr[start];
  let leftPointer = start + 1;

  for (let i = start + 1; i <= end; i++) {
    const comparison = comparator
      ? comparator(arr[i], pivotValue)
      : arr[i] - pivotValue;

    if (comparison < 0) {
      // Swap elements
      [arr[leftPointer], arr[i]] = [arr[i], arr[leftPointer]];
      leftPointer++;
    }
  }

  // Swap the pivot with the element at the left pointer
  [arr[start], arr[leftPointer - 1]] = [arr[leftPointer - 1], arr[start]];

  // Return the index of the pivot
  return leftPointer - 1;
}

// QuickSort function
function quickSort(arr, comparator) {
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
  }

  // Use the pivot function to partition the array
  const pivotIndex = pivot(arr, comparator);
  const left = arr.slice(0, pivotIndex); // Elements less than the pivot
  const right = arr.slice(pivotIndex + 1); // Elements greater than the pivot

  // Recursively sort left and right, and concatenate results
  return [
    ...quickSort(left, comparator),
    arr[pivotIndex],
    ...quickSort(right, comparator),
  ];
}

/* Sliding Window Pattern */

/* 
This pattern involves creating a window which can either
be an array or number from one position to another.
*/

/*
Depending on a certain condition, the window either  
increases or closes (and a new window is created)
 */
/* 
Very useful for keeping a track of a subset of data
in an array/string etc.
*/

//Naive Solution : Time Complexity O(N^2)

/* function maxSubarraySum(array, number) {
  let totalSum = -Infinity;
  if (!array.length) return null;

  for (let i = 0; i < array.length - number + 1; i++) {
    let sum = 0;
    for (let j = 0; j < number; j++) {
      sum += array[i + j];
    }
    if (totalSum < sum) {
      totalSum = sum;
    }
  }
  return totalSum;
} */

//   Sliding Window Approach : Time Complexity O(N)

function maxSubarraySum(array, number) {
  let maxSum = 0;
  let tempSum = 0;

  if (array.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubarraySum([], 4)); //null

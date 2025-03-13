/* Multiple Pointers Pattern  */

/* 
Creating pointers or values that corresponds to an index or position
 and move towards the beginning, end or middle based on a certain condition.
*/

/* 
Very efficient for solving problems with minimal space complexity as well.
*/

/* 
Write a function called sumZero which accepts a sorted 
array of integers. The function should find the first pair
where the sum is 0. Return an array that includes both values
that sum to zero or undefined if a pair does not exist.
*/

// Naive Solution : Time complexity O(N^2), Space Complexity O(1)

/* const sumZero = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        result.push(arr[i], arr[j]);
        return result;
      }
    }
  }
  return undefined;
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); //  undefined
console.log(sumZero([1, 2, 3])); //  undefined */

// Multiple pointer solution: Time complexity O(N), Space complexity O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

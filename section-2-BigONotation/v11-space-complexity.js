// Space complexity in js

// Rules of thumb

/* Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including the space taken up by the inputs. */

/* 1. Most primitives (booleans, numbers, undefined , null) are constant space.
   2. String require O(n) space (where n is the string length)
   3. Reference types are generally O(n) =, where n is the length (for arrays) or the number of keys (for objects)
   4. 
*/

function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

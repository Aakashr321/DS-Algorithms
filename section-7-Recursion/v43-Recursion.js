/* What is Recursion ? */
/* 
A process (a function in our case) that calls itself.
*/

// JSON.parse and JSON.stringify also uses recursion
//document.getElementById and DOM traversal algorithms.
//Object traversal

/* How recursive functions work */

/* Invoke the same function with a different input until
you reach your base case. */

/* Two essential parts of a recursive function!
    1. Base Case
    2. Different Input
*/

function countDown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  return countDown(num);
}

countDown(25);

/* Second Example */

function sumRange(num) {
  if (num === 1) return 1;

  return num + sumRange(num - 1);
}

console.log(sumRange(5));

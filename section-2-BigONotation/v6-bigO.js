// function addUpTo(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

/* Timing functions to calculate time */

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000}seconds.`);

/* Big O is a way of formalize fuzzy counting */

/* BigO can be linear, quadratic, constant or it can be entirely different */

/* Big O Shorthands */

/* 1. Arithmetic operations are constant
   2. Variables assignment are constant
   3. Accessing elements in an array (by index) or object (by key) is constant
   4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.
*/

/* Auxiliary space complexity refers to the space required by the algorithm, Not including space taken up by the inputs. */

/* 
f(n) could be linear (f(n)=n)
f(n) could be quadratic (f(n)=n2)
f(n) could be constant (f(n)=1)
f(n) could be something entirely different
*/

/*  When to use arrays*/

//When you need order
//When you need fast access/insertion and removal

/* 
1. Insertion - if at end then O(1) else if at start then O(n).
2. Removal - if at end then O(1) else if at start then O(n).
3. Searching - O(n).
3. Access - O(1).
4. push : O(1)
5. pop : O(1)
6. shift : O(n)
7. unshift : O(n)
8. concat : O(n)
9. slice : O(n)
10. splice : O(n)
11. sort : O(n*log n)
12. forEach/map/filter/reduce/etc. : O(n)
*/

let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

// function flattenArray(array) {
//   let newArr = [];

//   array.forEach((arr, index) => {
//     if (Array.isArray(arr)) {
//       newArr.push(...flattenArray(arr));
//     } else {
//       newArr.push(arr);
//     }
//   });
//   return newArr;
// }

// console.log(flattenArray([1, [2, [3, 4], 5], 6, [7, 8]]));

function removeDuplicates(str) {
  let arr = str.split("");
  let newStr = [];

  arr.forEach((el, index) => {
    if (arr.indexOf(el) === index) {
      newStr.push(el);
    }
  });
  return newStr.join("");
}

console.log(removeDuplicates("abccde"));

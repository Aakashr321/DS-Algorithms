/* a. Using concat() and apply() */

/* function flattenArray(array) {
  let flatArray = [].concat.apply([], array);
  return flatArray;
} */

/* b. Using the spread operator */

/* function flattenArray(array) {
  return [].concat(...array);
} */

/* c. Using the reduce method */

/* function flattenArray(array) {
  let flatArray = array.reduce((acc, curVal) => {
    return acc.concat(curVal);
  }, []);

  return flatArray;
} */

/* Custom function */

function customFlat(array, depth = 1) {
  let newArray = [];

  array.forEach((arr) => {
    if (Array.isArray(arr) && depth > 0) {
      newArray.push(...customFlat(arr));
    } else {
      newArray.push(arr);
    }
  });
  depth--;
  return newArray;
}

console.log(customFlat([1, 2, 3, [4, 5, 6], 7, 8]));

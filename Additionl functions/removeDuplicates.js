/*1. Remove duplicates from an array using a Set */
function removeDuplicate(array) {
  return [...new Set(arr)];
}

/*2. Remove duplicates from an array using indexOf() and filter() methods */

function removeDuplicate(array) {
  return array.filter((el, index) => indexOf(el) === index);
}

/*3. Remove duplicates from an array using forEach() and include() */

function removeDuplicate(array) {
  let newArray = [];

  array.forEach((el) => {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  });
  return newArray;
}

/*4. Remove duplicates from an array of objects by one property  */

const members = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "Johnny" },
  { id: 4, name: "Alice" },
];
const uniqueBy = (arr, prop) => {
  return [...new Map(arr.map((m) => [m[prop], m])).values()];
};

console.log(uniqueBy(members, "id"));

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha(A-Z)
    !(code > 96 && code < 123) //lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

// function charCount(str) {
//   const chars = str.replace(/\s+/g, "").toLowerCase().split("");
//   let result = {};
//   chars.forEach((el, index) => {
//     if (result.hasOwnProperty(el)) {
//       result[el]++;
//     } else {
//       result[el] = 1;
//     }
//   });
//   return result;
// }

// const charCount = (str) => {
//   const result = {};

//   for (let char of str) {
//     const character = char.toLowerCase();
//     if (/[a-z0-9]/.test(character)) {
//       if (result[character] > 0) {
//         result[character]++;
//       } else {
//         result[character] = 1;
//       }
//     }
//   }
//   return result;
// };

const charCount = (str) => {
  const result = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      const character = char.toLowerCase();
      result[character] = ++result[character] || 1;
    }
  }
  return result;
};

console.log(charCount("This is a character"));

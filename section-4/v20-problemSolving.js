// Problem solving

/* 
1.Understand the problem.
2.Explore concrete examples.
3.Break it down.
4.Solve/simplify
5.Look back and refactor.
*/

// Understand the problem

/* 
1. Can i restate the problem in my own words?
2. What are the inputs that go in the problem?
3. What are the outputs that should come from the solution to the problem ?
4. Can the outputs be determined from the inputs ? In the other words, do i have enough information to solve the problem ?
(You may not be able to answer this question until you set about solving the problem. That's okay, It's still worth considering the question at this early stage.)
5. How should i label the important pieces of the data that are a part of the problem?
*/

/* Write a function which takes in a string and counts each character in a string. */

function charCount(str) {
  const chars = str.replace(/\s+/g, "").toLowerCase().split("");
  let result = {};
  chars.forEach((el, index) => {
    if (result.hasOwnProperty(el)) {
      result[el]++;
    } else {
      result[el] = 1;
    }
  });
  return result;
}

console.log(charCount("This is a character"));

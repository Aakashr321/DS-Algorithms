function addUptoFirst(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUptoSecond(n) {
  return (n * (n + 1)) / 2;
}

function countUpAndDown(n) {
  console.log("Going Up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top! \n Going Down..");
  for (let j = n - 1; j > 0; j--) {
    console.log(j);
  }
  console.log("Back down.");
}

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

function logAtMost5(n) {
  for (let i = 1; i < Math.min(5, i); i++) {
    console.log(i);
  }
}

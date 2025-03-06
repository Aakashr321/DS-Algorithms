function addUptoFirst(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUptoSecond(n) {
  return (n * (n + 1)) / 2;
}

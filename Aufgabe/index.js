const res = new Array(100)
  .fill(0)
  .map((v, i) => i + 1)
  .filter(v => v % 2 === 0)
  .reduce((prev, curr) => prev + curr, 0);

console.log(res);

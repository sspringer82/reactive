const arr = [];
for (var i = 1; i <= 100; i++) {
  arr.push(i);
}
const result = arr
  .filter(v => v % 2 === 0)
  .reduce((prev, curr) => prev + curr, 0);

console.log('arr: ', result);

const { interval } = require('rxjs');
const { map, filter, take, scan, last } = require('rxjs/operators');

interval(1)
  .pipe(
    map(() => String.fromCharCode(Math.floor(Math.random() * 256))),
    filter(v => ['a', 'e', 'i', 'o', 'u'].includes(v)),
    take(10),
    scan((x, y) => x + y),
    last()
  )
  .subscribe(v => console.log(v));

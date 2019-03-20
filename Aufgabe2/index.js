const { interval } = require('rxjs');
const { map } = require('rxjs/operators');

interval(500) // 0 1 2 3 4
  .pipe(map(v => v * v))
  .subscribe(v => console.log('Value: ', v)); // Ausgabe

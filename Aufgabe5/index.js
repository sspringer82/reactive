const { timer, interval } = require('rxjs');
const { map, filter, withLatestFrom, take } = require('rxjs/operators');
const { Observable } = require('rxjs');

const t = timer(0, 1000).pipe(map(() => new Date().toString()));
const strings = ['bla', 'blubb', 'foo', 'bar', 'baz'];

/*const messages = Observable.create(observer => {
  setInterval(() => {
    if (Date.now() % 5 === 0) {
      observer.next(strings[Math.floor(Math.random() * strings.length)]);
    }
  },500);
});*/

const messages = interval(10).pipe(
  filter(v => {
    return v % Math.floor(Math.random() * 1000) === 0;
  }),
  map(() => {
    return strings[Math.floor(Math.random() * strings.length)];
  })
);

messages
  .pipe(
    withLatestFrom(t),
    take(10),
    map(([v1, v2]) => `${v1} ${v2}`)
  )
  .subscribe(v => {
    console.log(v);
  });

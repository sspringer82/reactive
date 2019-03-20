const { interval, Subject } = require('rxjs');
const { map } = require('rxjs/operators');

const observable = interval(1000).pipe(
  map(() => Math.floor(Math.random() * 256))
);

const subject = new Subject();

subject.subscribe(v => console.log('ASCII: ' + String.fromCharCode(v)));
subject.subscribe(v => console.log('Code: ' + v));

observable.subscribe(subject);

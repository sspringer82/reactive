//const Rx = require('rxjs');
const { Observable } = require('rxjs');

const observable = Observable.create(observer => {
  observer.next(1);
  observer.complete();
});

observable.subscribe(data => {
  console.log(data);
});

console.log('hallo welt');

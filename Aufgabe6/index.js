const { interval } = require('rxjs');

const { mergeMap, catchError, retry } = require('rxjs/operators');

interval(1000)
  .pipe(
    mergeMap(v => {
      if (v % 5 === 0 && v > 0) {
        return Rx.Observable.throw('Boooh!');
      } else {
        return Rx.Observable.of(v);
      }
    }),
    catchError(e => {
      return Rx.Observable.of(e);
    }),
    retry(2)
  )
  .subscribe(v => console.log(v), e => console.log('booh'));

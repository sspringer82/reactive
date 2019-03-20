const { of } = require('rxjs');
const { scan } = require('rxjs/operators');
of({ name: 'Basti' }, { age: 42 }, { address: 'dahoam' })
  .pipe(
    scan((x, y) => {
      return {
        ...x,
        ...y,
      };
    })
  )
  .subscribe(x => console.log(x));

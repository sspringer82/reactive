const { interval } = require('rxjs');
const { map } = require('rxjs/operators');

obs.pipe(map(...), filter(...)).subscribe();

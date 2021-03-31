const { from, asyncScheduler } = require('rxjs')
const { observeOn } = require('rxjs/operators')

//Síncrono
console.log('Antes(Sync)...')

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .subscribe(console.log)


console.log('Depois(Sync)...')


//-------------------------------------------------------------

//Assíncrono
// console.log('Antes(Async)...')

// from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//     .pipe(observeOn(asyncScheduler))
//     .subscribe(console.log)


// console.log('Depois(Async)...')  
// desafio!
// criar uma stream de numeros
// entre min e max com Observable
const { Observable, noop } = require('rxjs');



function entre(min, max){
    if (min>max){
        [min, max] = [max, min]
    }

    return new Observable(subscriber => {
        for(let i = min; i<= max; i++){
            subscriber.next(i)
        }
        subscriber.complete()
    })
}

entre(10, 4)
    .subscribe(
        num => console.log(`num = ${num}`),
        noop,
        () => console.log('Fim!')

    )
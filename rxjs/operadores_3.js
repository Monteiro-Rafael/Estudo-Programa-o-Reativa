const { Observable, Subscriber } = require('rxjs')

function elementosComDelay(tempo, ...elementos){
    return Observable.create(subscriber => {
        (elementos || []).forEach((el, i) => {
            setTimeout(() => {
                subscriber.next(el)
                if(elementos.length === i+1){
                    subscriber.complete()
                }
            }, tempo * (i +1))
        })
    })
}



elementosComDelay(500, 1, 'Rafael', 3, false, 5, [1, 2, 3])
    .subscribe(console.log)
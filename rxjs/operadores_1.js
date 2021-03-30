// Os dois tipos...
// 1. Os Operadores de Criação
// 2. Operadores Encadeáveis (Pipeable Op.)

const { of } = require('rxjs')
const { last, map } = require('rxjs/operators')

// of(1, 2, 'ana', false, 'ultimo')
//     .pipe(last())
//     .pipe(map(el => el[0]))
//     .subscribe(function(valor){
//         console.log(`O valor gerado foi: ${valor}`)
//     })


of(1, 2, 'ana', false, 'ultimo')
    .pipe(
        last(),
        map(el => el[0]),
        map(v => `A letra encontrada é: \n ${v.toLowerCase()} - minúscula ou \n ${v.toUpperCase()} - maiúscula`)
    )
    .subscribe(function(valor){
        console.log(`O valor gerado foi: ${valor}`)
    })
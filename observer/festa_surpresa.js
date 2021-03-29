const readLine = require('readline')

function obterResposta(pergunta){
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })    
}

obterResposta('Esse é um teste?')
    .then(console.log)
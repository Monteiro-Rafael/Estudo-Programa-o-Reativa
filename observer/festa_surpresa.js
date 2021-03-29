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

//observer
function namorada(){
    
    console.log('N: Apagar as luzes')
    console.log('N: Pedir silêncio')
    console.log('N: Surpresa!!!!!!')

}

//observer
function sindico(){
    console.log('S: Monitorando o Barulho')        

}

//subject
async function porteiro(interessados){
    while(true){
        const resp = await obterResposta('O namorado chegou? (s/N/q) ')
        if (resp.toLowerCase() === 's'){
            // os observadores são notificados
            (interessados || []).forEach(obs => obs()) // [] caso nada seja passado, não vai dar erro.
        } else if (resp.toLowerCase() === 'q'){
            break
        }
    }
}

porteiro([namorada, sindico]) // registro de dois observers
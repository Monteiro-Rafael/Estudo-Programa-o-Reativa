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

function namorada(){
    setTimeout(()=> {
        console.log('N: Apagar as luzes')
        console.log('N: Pedir silêncio')
        console.log('N: Surpresa!!!!!!')
    }, 2000)

}
function sindico(){
    setTimeout(()=> {
        console.log('S: Monitorando o Barulho')        
    }, 1000)

}


function porteiro(interessados){
    interessados.forEach(obs => obs())
}

porteiro([namorada, sindico])
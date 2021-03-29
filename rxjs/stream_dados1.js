function gerarNumeros(){

        return {
            iniciar(fn, intervalo = 500){
            
            let num = 0
            setInterval(()=> {
                fn(num++)
            }, intervalo)

        }
    }
}

const temp1 = gerarNumeros()
temp1.iniciar(numero => {
    console.log(`#1: ${numero * 2}`)
})

const temp2 = gerarNumeros()
temp2.iniciar(a => {
    console.log(`#2: ${a + 100}`)
}, 1000)
function gerarNumeros(){

        return {
            iniciar(fn, intervalo = 500){
            
            let num = 0
            let i = setInterval(()=> {
                fn(num++)
            }, intervalo)

            return {
                parar(){
                    clearInterval(i)
                }
            }

        }
    }
}

const temp1 = gerarNumeros()
const exec11 = temp1.iniciar(numero => {
    console.log(`#1.1: ${numero * 2}`)
})

const exec12 = temp1.iniciar(numero => {
    console.log(`#1.2: ${numero * 2}`)
}, 300)

const temp2 = gerarNumeros()
const exec21 = temp2.iniciar(a => {
    console.log(`#2.1: ${a + 100}`)
}, 1000)

const exec22 = temp2.iniciar(a => {
    console.log(`#2.2: ${a + 100}`)
}, 100)


setTimeout(() => {
    exec11.parar()
    exec12.parar()
    exec21.parar()
}, 4000)

setTimeout(() => {
    exec22.parar()
}, 6000)
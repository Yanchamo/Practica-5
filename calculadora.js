//Ejercicio de lectura y escritura
const mostrarValor = () => {

const input1 = document.getElementById('valor1')

let valor1 = input1.value
console.log (valor1)
console.log("mostrando valor")

const span = document.getElementById("input-valor")
console.log(span)
console.log(span.innerHTML)
span.innerHTML = valor1
}
//Calculadora
// leer inputs validarlos y devolver estos valores
const leerInputs = () => {   
    console.log ("leyendo inputs")
    //obtenemos las etiquetas input
    const inputNumero1 = document.getElementById('input-numero-1')
    const inputNumero2 = document.getElementById('input-numero-2')
    //obtenemos los valores de los inputs
    let numero1 = inputNumero1.value
    let numero2 = inputNumero2.value
    console.log("Valores desde el input",numero1, numero2)

    //validar que no esten vacios
    if (numero1 === "") {
        //anunciar error y 
        alert ("Valor 1 no existe o contiene caracteres no numericos")
        return null
    }
    if (numero2 === "") {
        //anunciar error y 
        alert ("Valor 1 no existe o contiene caracteres no numericos")
        return null
    }
    // cambiar el tipo de dato
    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)
    console.log(numero1, numero2)

    const numerosValidados = {
        numero1: numero1,
        numero2: numero2
    }
    return numerosValidados
 
} 
//Realizar operacion, debe recibir el tipo de operacion realizar la operacion con ambos inputs.

const realizarOperacion = (operacion) => {
    const numeros = leerInputs()
    if (numeros === null) {
        return
    }

    console.log(operacion, "con los numeros:", numeros.numero1, "y", numeros.numero2)

    let Resultado = 0

    //validar operacion
    if (operacion === 'suma') {
        resultado = numeros.numero1 + numeros.numero2    
    }
    if (operacion === 'resta') {
        resultado = numeros.numero1 - numeros.numero2    
        }
    if (operacion === 'multiplicacion') {
        resultado = numeros.numero1 * numeros.numero2    
    }
    if (operacion === 'division') {
        resultado = numeros.numero1 / numeros.numero2    
    }
        console.log("resultado", resultado)
       mostrarResultado(resultado, operacion)
    }
//modificare el simbolo de operacion
const mostrarResultado = (resultado, operacion) => {
console.log(resultado)
const spanResultado = document.getElementById('resultado')
spanResultado.innerText = resultado
const spanOperacion = document.getElementById('operacion')

    if (operacion === 'suma') {
        spanOperacion.innerText = '+'
    }

    if (operacion === 'resta') {
        spanOperacion.innerText = '-'
    }

    if (operacion === 'multiplicacion') {
        spanOperacion.innerText = 'x'
    }

    if (operacion === 'division') {
        spanOperacion.innerText = '/'
    }
}

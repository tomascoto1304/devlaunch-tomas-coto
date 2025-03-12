/*
    Escribe un programa sencillo en JavaScript que calcule y muestre el Índice de Masa 
    Corporal (IMC) de un usuario. El programa debe solicitar al usuario su nombre, altura 
    en metros y peso en kilogramos.

    Después de calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya 
    su nombre y el valor de su IMC.

    Calcula el IMC utilizando la fórmula:

    IMC = weight / height²
*/

const prompt = require ('prompt-sync')()

const name = prompt('¿Cuál es su nombre? --> ')
const weight = parseFloat((prompt('¿Cuál es su peso? --> ')))
const height = parseFloat((prompt('¿Cuál es su estatura? --> ')))

//const IMC = weight / height ** 2 --> Mi solución

const IMC = weight / Math.pow(height, 2)

console.log(`
    
    Nombre: ${name} \n
    Peso: ${weight} kg \n
    Estatura: ${height} m 

    ${name}, su IMC es de --> ${IMC.toFixed(2)}

    
`)


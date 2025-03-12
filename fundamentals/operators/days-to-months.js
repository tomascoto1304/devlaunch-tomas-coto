/*
    Escribe un programa en JavaScript que solicite al usuario ingresar el número de días y 
    calcule el número equivalente de meses y días restantes, considerando que un mes consta 
    de 30 días.

    Este programa utiliza el módulo prompt-sync para recibir interactivamente la entrada 
    del usuario. Después de calcular la cantidad de meses y días restantes según la entrada, 
    el programa muestra un mensaje al usuario indicando el equivalente en meses y días 
    restantes.

    Como pista, puedes usar Math.floor() para redondear el resultado a un número entero.

    Si el usuario ingresa 100, la salida será: 100 days are 3 months and 10 days.

*/

const prompt = require ('prompt-sync')()

const days = parseInt((prompt('Cantidad de días --> ')))

const quantityOfMonths = Math.floor(days / 30)
const quantityOfDays = days % 30

console.log(`

    CALCULADORA DE MESES Y DÍAS
    
    Meses: ${quantityOfMonths} \n
    Días: ${quantityOfDays}

    ${days} días son ${quantityOfMonths} meses y ${quantityOfDays} días. 
    
`)
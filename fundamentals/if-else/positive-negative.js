/*
Escribe un programa simple en JavaScript que evalúe el valor de una variable llamada 'n'.  
Verifica si el número es positivo, negativo o cero, y muestra un mensaje correspondiente  
basado en la siguiente evaluación:

Si el número es mayor que 0, imprime 'Positivo'.  
Si el número es menor que 0, imprime 'Negativo'.  
Si el número es exactamente 0, imprime 'Cero'.  

Si la variable no es un número, imprime un mensaje de error: 'Por favor, introduce un número'.  
*/

const prompt = require ('prompt-sync')()

const n = parseInt(prompt('Introduzca un valor + o - : '))

if (n < 0) {
    console.log(`${n}--> Negativo`)

  } else if (n > 0) {
    console.log(`${n}--> Positivo`)

  } else if (n == 0){
    console.log(`${n}--> Cero`)

} else {
  console.log(`¡Por Favor introduzca un número!`)

}

//  n > 0 ? `${n}--> Positivo` ? n < 0 `${n}--> Negativo` ? n == 0 `${n}--> Cero` : `¡Por Favor introduzca un número!`
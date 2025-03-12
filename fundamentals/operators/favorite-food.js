/*

    Escribe un programa simple en JavaScript que examine las preferencias culinarias de tres 
    personas: María, Pepe y Malvern. El programa analiza tres condiciones:

    ¿Comparte María la misma comida favorita que tanto Pepe como Malvern?

    ¿La comida favorita de María coincide ya sea con la de Pepe ó con la de Malvern? 

    ¿La preferencia de María es diferente tanto de la de Pepe como de la de Malvern?

    Recuerda pedir los valores al usuario para poder elegir diferentes combinaciones, 
    ejemplo: Si la comida favorita de María es la pizza, la de Pepe es el pollo y el de 
    malvern es el pescado.

    Los resultados de estas comparaciones se muestran luego, ofreciendo información sobre las 
    similitudes y diferencias en las preferencias culinarias de los tres individuos.

*/

const prompt = require ('prompt-sync')()

const favFoodMaria = prompt('¿Cuál es la comida favorita de María?: ')
const favFoodPepe = prompt('¿Cuál es la comida favorita de Pepe?: ')
const favFoodMalvern = prompt('¿Cuál es la comida favorita de Malvern?: ')

const isMariaAndPepeSameFavFood = favFoodMaria === favFoodPepe
const isMariaAndMalvernSameFavFood = favFoodMaria === favFoodMalvern

const allMatch = isMariaAndPepeSameFavFood && isMariaAndMalvernSameFavFood
const someMatch = isMariaAndPepeSameFavFood || isMariaAndMalvernSameFavFood
const noMatch = !(isMariaAndPepeSameFavFood || isMariaAndMalvernSameFavFood)

console.log(`
    ¿María tiene la misma comida favorita igual a Pepe y Malvern?: ${allMatch}\n
    ¿La comida favorita de María es igual a la de Pepe o a la de Malvern?: ${someMatch}\n
    ¿La comida favorita de María difiere tanto de la comida favorita de Pepe como la de Malvern?: ${noMatch}   

`)



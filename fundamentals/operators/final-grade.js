/*
    Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes 

    en una escuela. Como parte de este desafío, primero configuras el entorno para recibir 

    entradas del usuario, permitiendo que ingresen tres notas.

    Luego, procesas estos datos para calcular el promedio de manera precisa.

    Finalmente, presentas el resultado formateado con máximo dos decimales, 

    para asegurar una lectura clara.

    Si el usuario ingresa las calificaciones 80, 70 y 90, la salida será: 80.
*/

const prompt = require ('prompt-sync')()

const grade1 = parseFloat((prompt('Ingrese la primera nota --> ')))
const grade2 = parseFloat((prompt('Ingrese la segunda nota --> ')))
const grade3 = parseFloat((prompt('Ingrese la tercera nota --> ')))

const averageGrade = (grade1 + grade2 + grade3) / 3

if (averageGrade >= 75) {

    console.log(`
        -----------------------------
        PROMEDIO FINAL DEL ESTUDIANTE
        -----------------------------
        NOTA 1: ${grade1}
        NOTA 2: ${grade2}
        NOTA 3: ${grade3}
    
        RESULTADO: ${averageGrade}

        ¡APROBADO!
        
    `) 
    
} else {
    console.log(`
        -----------------------------
        PROMEDIO FINAL DEL ESTUDIANTE
        -----------------------------        
        NOTA 1: ${grade1}
        NOTA 2: ${grade2}
        NOTA 3: ${grade3}
    
        RESULTADO: ${averageGrade.toFixed(2)}

        REPROBADO
        
    `) 
}


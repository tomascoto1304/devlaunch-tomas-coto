/*
En una empresa hay proceso donde cada trabajador debe registrar las horas de entrada  
y salida diariamente. De esta forma, al final de cada día, su empleador sabrá cuánto  
tiene que pagarles por sus horas trabajas.  
Pero, si una persona trabajó más de ocho horas, se le debe pagar un costo extra por  
las horas adicionales, que es igual a 1.5 veces el monto de su tarifa por hora.  
Haz un programa que, recibiendo la tarifa por hora, la hora de entrada y la hora de salida,  
imprima el monto total de dinero que ese empleado recibió ese día.  

Tarifa por hora: $10  
Hora de entrada: 9:00  
Hora de salida: 18:00  

✔ Respuesta: $95  
*/

const prompt = require("prompt-sync")();
const EXTRA_PAYMENT = 1.5
const WORK_DAY_HOURS = 8



const calculateSalary = (tariffPerHour, clockIn, clockOut) => {
    const [startHour] = clockIn.split(':')
    const [endHour] = clockOut.split(':')

    const workedHours = endHour - startHour

    let salary = 0

    if(workedHours <= 8){
        salary = tariffPerHour * workedHours
    } else {
        const extraHours = workedHours - WORK_DAY_HOURS
    
        salary = (tariffPerHour * WORK_DAY_HOURS
        
        ) + ((extraHours * tariffPerHour) * EXTRA_PAYMENT) 
    }
    return salary

}

const main = () => {
    const tariffPerHour = parseFloat(prompt('HOURLY RATE ($): '))
    const clockIn = prompt('START AT (HH:MM): ')
    const clockOut = prompt('END AT (HH:MM): ')

    const salary = calculateSalary(tariffPerHour, clockIn, clockOut)

    console.log(`SALARY: $${salary}`)
}
main()
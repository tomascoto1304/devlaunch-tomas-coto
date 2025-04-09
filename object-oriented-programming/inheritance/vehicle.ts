/*
    Eres responsable de diseñar un sistema sencillo de gestión de vehículos para una empresa de transporte.
    
    El sistema debe representar diferentes tipos de vehículos y sus comportamientos utilizando una estructura

    Todos los vehículos tienen un emoji, marca, modelo y año de fabricación.

    Los vehiculos deben poder arrancar y mostrar su info
    
    Los coches tienen un número específico de puertas y deben poder encender el aire acondicionado.

    Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).


*/

import promptSync from 'prompt-sync';
const prompt = promptSync();
class Vehicle {
    constructor(
       protected emoji: string,
       protected brand: string,
       protected model: string,
       protected manufacturedIn: number
    ) {
        this.emoji
        this.brand
        this.model
        this.manufacturedIn
        
    }

    isOn(){
        
        return 'Vehicle is ready to go'
    }

    toString(){
        return`Emoji: ${this.emoji}\n Brand: ${this.brand}\n Manufactured In: ${this.manufacturedIn}`
    }
}

type DoorNumber = 2 | 4

class Car extends Vehicle{
    constructor(
     emoji: string,
     brand: string,
     model: string,
     manufacturedIn: number,
     private doors: DoorNumber
    ) {
        super(emoji, brand, model, manufacturedIn)
    }

    airconOn(): string{
        const airConditioning = prompt('Does the car have air conditioning? ')
        return `Air conditioning status: ${airConditioning}`
    }

    isOn(): string {
        return 'The car is ready to go'
    }

    print(): string {
        const info = this.toString()
 
        return `Information:\n ${info}`
    }
}

class Motorcycle extends Vehicle {
    constructor(
     emoji: string,
     brand: string,
     model: string,
     manufacturedIn: number,
    ) {
        super(emoji, brand, model, manufacturedIn)
    }

    hasSideCar(): string{
        const sideCar = prompt('Does the Motorcycle has side car? ')
        return `Side car status: ${sideCar}`
    }

    isOn(): string {
        return 'The motorcycle is ready to go'

    }

    makingATrick(): string{
        return 'The driver is making a wheelie!!'
    }

    print(): string {
        const info = this.toString()
 
        return `Information:\n ${info}`
    }
}

const car1 = new Car('🚗', 'Alfa Porsche', '911 GT3', 2020, 2)
console.log(car1.print())
console.log(car1.airconOn())
console.log(car1.isOn())

const mot1 = new Motorcycle('🏍️', 'Kawasakii', 'Ninja', 2022)
console.log(mot1.print())
console.log(mot1.hasSideCar())
console.log(mot1.isOn())
console.log(mot1.makingATrick())



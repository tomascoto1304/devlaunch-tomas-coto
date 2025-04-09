/*
  Un zoológico necesita un sistema para gestionar los animales y sus comportamientos.

  Debes modelar un conjunto de clases que representen distintos tipos de animales y sus características.

  Todos los animales tienen un nombre, especie y edad. Además, todos deben poder emitir un sonido y mostrar su información básica.

  Algunos animales como los leones, pueden rugir y tienen una melena. Los elefantes pueden hacer
  sonar su trompa y tienen un tamaño específico (por ejemplo, 'pequeño', 'mediano' o 'grande').
    
  Crea una clase base Animal con las propiedades y métodos necesarios.

  Extender la clase Animal para crear clases específicas como Leon y Elefante que tengan comportamientos
  y propiedades particulares.
*/

class Animals {
    constructor(
        protected name: string,
        protected specie: string,
        protected age: number
        
    ) {
        this.name = name
        this.specie = specie
        this.age = age
    }

     makeSound(){
       return '' 
    }

     toString(){
        return`Name: ${this.name}\n Specie: ${this.specie}\n Age: ${this.age}`
    }
}

class Lion extends Animals{
    constructor(
     name: string,
     specie: string,
     age: number
    ){
        super(name, specie, age)

    }

    makeSound(): string {
        return 'ROAR'
    }

   print(): string {
       const info = this.toString()

       return `🦁:\n ${info}`
   }
}

type ElephantSize = 'small' | 'medium' | 'big'
class Elephant extends Animals{
    constructor(
        name: string,
        specie: string,
        age: number,
        private size: ElephantSize
       ){
           super(name, specie, age)
   
       }
    
    makeSound(): string {
        return 'PHHR'
    }

   print(): string {
       const info = this.toString()

       return `🐘:\n ${info}\nSize: ${this.size}`
   }
}

const l1 = new Lion('Alex', 'King', 21)
console.log(l1.makeSound())
console.log(l1.print())

const elph1 = new Elephant('Marivn', 'Indian', 21, 'big')
console.log(elph1.makeSound())
console.log(elph1.print())


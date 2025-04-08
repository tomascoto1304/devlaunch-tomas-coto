/*
  Cuando se trata de ventiladores, a menudo presentan características distintivas como configuraciones de velocidad, tamaño, 
  potencia medida en vatios o caballos de fuerza, tipo y color.

  Para maneiar y modificar adecuadamente las características de un ventilador, es útil arganizarlas
  en un sistema de clases. De esta manera, se obtiene una estructura clara para trabaiar con las
  propiedades del ventilador, facilitando la comprensión, reutilización y mantenimiento del código.
  
  Para abordar esta tarea, crearemos una clase que encapsule los diferentes atributos de un ventilador.
  
  Esta clase incluirá un constructor para inicializar dichos atributos y métodos como
  getters y setters para acceder y modificarlos según sea necesario.
  
  Al implementar esta estructura de clase, podremos representar y gestionar de manera eficiente
  características de los ventiladores en nuestro sistema.

  Esta clase está diseñada para proporcionar todas las características esenciales del ventilador desde
  el momento de su creación.
*/

type FanSize = 'small' | 'medium' | 'Large'
type FanColor = 'black' | 'white' | 'gray'
type FanSpeed = 0 | 1 | 2 | 3


class Fan {
  public speed: FanSpeed
  constructor(
    public size: FanSize,
    public type: string,
    public color: FanColor
  ) {

    this.speed = 0
    this.size = size
    this.type = type
    this.color = color
  }

  public setSpeed (speed: FanSpeed){
    this.speed = speed

  }

  public getSpeed(){
    return this.speed
  }

  public setSize (size: FanSize){
  this.size = size

  }

  public getSize(){
    return this.size
  }

  public setType (type: string){
    this.type = type

  }

  public getType(){
    return this.type
  }

  public setColor (color: FanColor){
    this.color = color

  }

  public getColor(){
    return this.color
  }

}

let fan1 = new Fan ('Large', 'Panasonic', 'black')

fan1.setSpeed (3)
fan1.setSize ('medium')
fan1.setType ('Samsung')
fan1.setColor ('gray')


console.log(fan1.speed)
console.log(fan1.size)
console.log(fan1.type)
console.log(fan1.color)






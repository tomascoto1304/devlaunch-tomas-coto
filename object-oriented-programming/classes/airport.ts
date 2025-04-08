type TrafficLevel = 'low' | 'medium' | 'high'

class Airport {
        public name: string
        public location: string
        public runawayStatus: boolean
        public trafficLevel: TrafficLevel
    constructor(
         name: string,
         location: string,
    ) {
        this.name = name
        this.location = location
        this.runawayStatus = true
        this.trafficLevel = 'low'
    }

    public setName (name: string){
        this.name = name
    }

    public getName (){
        return this.name
    }

    public setLocation (location: string){
        this.location = location
    }

    public getLocation (){
        return this.location
    }

    public setRunawayStatus (runawayStatus: boolean){
        this.runawayStatus = runawayStatus
    }

    public getRunawayStatus (){
        return this.runawayStatus
    }

    public setTrafficLevel (trafficLevel: TrafficLevel){
        this.trafficLevel = trafficLevel
    }

    public getTrafficLevel (){
        return this.trafficLevel
    }

    changeTrafficLevel(level: TrafficLevel): void {
        this.trafficLevel = level
        console.log(`El nivel de tráfico se ha cambiado a ${level} en el aeropuerto ${this.name} ubicado en ${this.location}`)
    }

    emergencyLanding(): void{
        this.runawayStatus = false
        this.trafficLevel = 'high'
        console.log(`Aterrizaje de emeregencia en el aeropuerto ${this.name}`)
    }

    displayInfo(): void{
        console.log(`
            Nombre: ${this.name}\n
            Ubicación: ${this.location}\n
            Estado de la pista: ${this.runawayStatus}\n
            Tráfico aereo: ${this.trafficLevel}     
        `)
    }
}

const myAirport = new Airport ('JFK International Airport', 'U.S.A')

myAirport.displayInfo()
myAirport.changeTrafficLevel('medium')
myAirport.displayInfo()
myAirport.emergencyLanding()
myAirport.displayInfo()


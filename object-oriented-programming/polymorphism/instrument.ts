type InstrumentType = 'aire' | 'Cuerda' | 'Percusion'

abstract class Instrument {
  constructor(public type: InstrumentType){

  }


  play(){}
}

class Guitar extends Instrument {
  constructor() {
    super('Cuerda')
  }

  play(){
    console.log('Strum strum...🎸')
  }
}

class Flute extends Instrument {
  constructor() {
    super('aire')
  }

  play(){
    console.log('toot toot...🪈')
  }
}

class Drums extends Instrument{
  constructor(){
    super('Percusion')
  }
  play(){
    console.log('boom boom...🥁')
  }
}



class Artist {
  constructor(){

  }

  playInstrument (instrument: Instrument){
    instrument.play()
    console.log(instrument.type)
  }
}



const guitat1 = new Guitar()
const flute1 = new Flute()
const drum1 = new Drums()


const artist1 = new Artist()

guitat1.play()
flute1.play()

artist1.playInstrument(guitat1)
artist1.playInstrument(flute1)
artist1.playInstrument(drum1)



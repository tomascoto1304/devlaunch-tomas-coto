const MAX_STEP = 3
const LANE_LENGTH = 20
const FINISH_LINE_POSITION = 0 

const moveDog = (position: number): number =>{
  const steps = Math.floor(Math.random() * MAX_STEP) + 1
  const newPosition = position - steps
  const isFinishLine = newPosition <= FINISH_LINE_POSITION
  return isFinishLine ? FINISH_LINE_POSITION : newPosition
}

const getLane = (laneLength: number, dogPosition: number, dog: string): string =>{
  let lane = '-'.repeat(laneLength).split('')

  const isFinishLine = dogPosition <= FINISH_LINE_POSITION
  const dogPos = isFinishLine ? FINISH_LINE_POSITION : dogPosition
  lane[dogPos] = dog

  for (let i = laneLength - 1; i > dogPos; i--) {
    if (lane[i] === '-') lane[i] = '🐾'  
    }
    
    return `🏁|${lane.join('')}|`
}

const dogRace = (): void => {
  let dog1Position = LANE_LENGTH - 1
  let dog2Position = LANE_LENGTH - 1
  
  while(true){
    const isThereAWinner = (
      dog1Position <= FINISH_LINE_POSITION ||
      dog2Position <= FINISH_LINE_POSITION
    );

    if (isThereAWinner) {
      const isDraw = dog1Position === dog2Position
      console.log(`¡Tenemos un ${isDraw ? 'empate' : 'ganador'}!`)
      break
    }

    dog1Position = moveDog(dog1Position)
    dog2Position = moveDog(dog2Position)

    const dogLane1 = getLane(LANE_LENGTH, dog1Position, '🦮')
    const dogLane2 = getLane(LANE_LENGTH, dog2Position, '🐩')

    console.log(`${dogLane1}\n${dogLane2}\n`)
  }
}

dogRace()

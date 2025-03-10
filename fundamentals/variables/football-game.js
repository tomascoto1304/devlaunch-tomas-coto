/* 
    El evento es parte de las eliminatorias sudamericanas para la copa del mundo.
    En un partido celebrado el 22/11/2023 a las 20:30, el equipo de Argentina
    se enfrentó al equipo visitante de Brasil. El resultado final fue 1-0,
    indicando a Argentina como el ganador.
*/

const eventName = 'Eliminatorias Sudamericanas'

const day = 22
const month = 11
const year = 2023

const date = `${day}/${month}/${year}`

const hour = 20
const minute = 30

const time = `${hour}:${minute}`

const formatHour = hour - 12
const formatTime = `${formatHour}:${minute}PM`

const localTeam = 'Argentina'
const awayTeam = 'Brasil'

const localTeamScore = 1
const awayTeamScore = 0

const score = `${localTeamScore}-${awayTeamScore}`

console.log(`
    Torneo: ${eventName} - ${formatTime}\n
    Equipos: ${localTeam} VS ${awayTeam}\n
    Resultado: ${score}
    
`)

if (localTeamScore > awayTeamScore) {
    console.log('Argentina WINS!')
} else {
    console.log('Brasil Wins')
}

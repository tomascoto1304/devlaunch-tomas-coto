/*
    El Elite Fitness Center es un gym boutique ubicado en Palo Alto, California,
    que ofrece membresías por $150 al mes.
    Opera de 6 AM a 10 PM, emplea a 10 entrenadores certificado
    y cuenta con comodidades como sauna, piscina y clases grupales.
*/

const gymName = 'Elite Fitness Center'

const location = 'Palo Alto, California'

const price = 150
const currency = '$'
const duration = 'monthly'
const membershipPrice = `${price}${currency} ${duration}`

//const membershipPrice = '$150 per month'

const openTime = 6
const closeTime = 22
const openingHours = `From ${openTime}:00AM to ${closeTime - 12}:00PM `

//const openingHours = 'From 6:00 AM to 10:00 PM'

const certifiedEmployees = 10

const amenity1 = 'pool'
const amenity2 = 'sauna'
const amenity3 = 'group classes'
const amenities = `${amenity1}, ${amenity2} and ${amenity3}`

console.log(`
    Name: ${gymName}\n
    Location: ${location}\n
    Price per month: ${membershipPrice}\n
    Timetable: ${openingHours}\n
    Amount of certified employees: ${certifiedEmployees}\n
    Amenities: ${amenities} 
`)
const prompt = require("prompt-sync")();

const birthDate = prompt('What is your birthday in format (YYYY/MM/DD)? ')

const today = new Date()
const birthDay = new Date(birthDate)

let age = today.getFullYear() - birthDay.getFullYear()

const birthDayPassed = (
    today.getMonth() > birthDay.getMonth() ||
    (
        today.getMonth()=== birthDay.getMonth() &&
        today.getDate() >= birthDay.getDate()
    )
)


if (!birthDayPassed) {
    age--
}

if (age >= 18) {
    console.log('Bienvenido al bar de Moes')
} else {
    console.log('No puedes pasar hasta tener 18 años o más')
}


console.log(age)
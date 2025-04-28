const MIN_MONTH = 1
const MAX_MONTH = 12
const MIN_DAY = 1
const MIN_YEAR = 1
const MAX_THRESHOLD = 10

const isValidDate = (day: number, month: number, year: number): boolean => {
  if (year < MIN_YEAR || month < MIN_MONTH || month > MAX_MONTH || day < MIN_DAY) {
    return false
  }

  const daysInMonth: number = new Date(year, month, 0).getDate()

  return day <= daysInMonth
}

const sumDigits = (number: number): number => {
  let sum = 0

  while (number > 0) {
    sum += number % MAX_THRESHOLD
    number = Math.floor(number / MAX_THRESHOLD)
  }

  return sum
}

const calculateTarotNumber = (day: number, month: number, year: number): number | null =>{

  if(!isValidDate(day, month, year)){
    console.error("Invalid date provided")
    return null
  }

  let total: number = day + month + year

  while (total > 10){
    total = sumDigits(total)
  }

  return total
}

console.log(calculateTarotNumber(13, 4, 2001))
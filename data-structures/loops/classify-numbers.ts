
const classifyNumbers = (maxNumber: number): string => {
    let result = ''
    for(let i = 1; i < maxNumber; i++){
        const isOdd = i % 2 === 0
        result += `${i} is ${isOdd ? 'odd' : 'even'} \n`
    }
    return result
}
console.log(classifyNumbers(10))
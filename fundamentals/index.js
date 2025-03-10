const prompt = require('prompt-sync')();

const name = prompt('What is your name? -> ');

console.log(`Hey there, ${name}!`); /* Esta es la mejor manera de escribirlo*/

/*console.log('Hey there,', name, '!');*/

const n = prompt('Give me a number: ');

console.log(`Number: ${n}`);

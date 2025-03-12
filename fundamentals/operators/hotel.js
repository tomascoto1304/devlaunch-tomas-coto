/*
    Crea un programa en JS que calcule la factura total de una persona en un hotel,
    donde cada habitación tiene un precio de $100 por noche, aprovechando una oferta promocional
    que incluye un descuento del 5%.
    EL programa deve solcitar al huesped el numero de noches que pasó en el hotel para calcular
    la factura final.
    si el usuario ingresa que se quedó 5 noches, la salida será: $475.00
*/
/////////////////// My Solution ///////////////////
// const prompt = require('prompt-sync')();
// const pricePerNight = 100
// const staysPerNight = prompt ('How many nights did you stay with us?: ')
// const discount = (staysPerNight * pricePerNight) * 0.05

// console.log(`Your bill is going to be $${(staysPerNight * pricePerNight) - (discount) } for your hole stay.`)
/////////////////// Answer ///////////////////
const prompt = require ('prompt-sync')()
const pricePerDay = 100
const promoDiscount = 0.05
const days = parseInt((prompt('¿Cuántos días desea alojarse? --> ')))
const subtotal = days * pricePerDay
const discount = subtotal * promoDiscount
const total = subtotal - discount
console.log(`
---------------------
|   HOTEL RECEIPT
---------------------
|  Nights: ${days}\n
|  Payment:
|
|   - Subtotal: $${subtotal}
|   - Discount: $${discount}
|   - Total:    $${total} 
    
`)
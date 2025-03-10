/*
    Voy al supermercado GreenCenter para hacer mis compras habituales y 
    planeo comprar manzanas y naranjas.
    Cuando estoy allí, veo que no hay platanos ni uvas, así que cambio un poco mi lista.
    Veo que 3 cajeros están trabajando, así que me preparo para pagar.
    Mis cosas cuestan $100 en total.
    Entrego $150 en efectivo y recibo $50 de cambio.
*/

const superMarket = 'Green Center'

const product1 = 'manzanas'
const product2 = 'naranjas'
const product3 = 'plátanos'
const product4 = 'uvas'


const list = [product1, product2, product3, product4]
const updatedList = list.slice(0, 2)

const availableCashDesks = 3

const total = 100
const myPay = 150
const currency = '$'

console.log(`
    Nombre del Supermercado: ${superMarket}\n
    Lista: ${list}\n
    Lista actualizada: ${updatedList}\n
    Cajeros disponibles: ${availableCashDesks}\n
    Total a pagar: ${total}${currency}\n
    Cancela con: ${myPay}${currency}\n
    Vuelto: ${myPay - total}${currency}
`)

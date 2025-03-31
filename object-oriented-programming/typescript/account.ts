/*
Estás diseñando un sistema básico para gestionar cuentas bancarias de clientes.

Cada cuenta bancaria tendrá un identificador único, un nombre del titular, y un saldo.

Tu tarea es crear una función createAccount que genere un objeto de cuenta bancaria.

El objeto debe ser creado por medio de un function declaration, con todas las propiedades y métodos deben estar definidos dentro 
de la función usando this.

Propiedades de la cuenta bancaria (dentro de la función usando this):

id: identificador único de la cuenta.

holderName: nombre del titular de la cuenta.

balance: saldo de la cuenta.

Métodos de la cuenta bancaria (dentro de la función usando this) :

deposit (amount): incrementa el saldo de la cuenta.

withdraw (amount): disminuye el saldo de la cuenta si hay suficientes fondos.

transfer (toAccount, amount): transfiere fondos de la cuenta actual a otra cuenta
si hay suficientes fondos disponibles.

*/

interface AccountShape {
  id: number, 
  holderName: string
  balance: number
  deposit: (amout: number) => void
  withdraw: (amout: number) => number | null
  transfer: (toAccount: AccountShape, amount: number) => AccountShape | null
}
function Account(id: number, holderName: string, balance: number = 0) {
  this.id = id
  this.holderName = holderName
  this.balance = balance

  this.deposit = function(amount: number){
    this.balance += amount
  }

  this.withdraw = function(amount: number){
    if (this.balance >= amount){
    this.balance -= amount
    return amount
    }

    return null
  }

  this.transfer = function(toAccount: AccountShape, amount: number){
    const cash = this.withdraw(amount)

    if (cash){
      toAccount.deposit(cash)
      return toAccount
    }

    return null
  }

  
  return this
}

const acc1: AccountShape = new (Account as any)(1, 'Tomás', 10000)
acc1.deposit(1000)
acc1.withdraw(5000)

const acc2: AccountShape = new (Account as any)(2, 'José')

acc1.transfer(acc2, 4000)
console.log(acc1.transfer(acc2, 2000))
console.log(acc1)
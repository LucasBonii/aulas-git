import readline from 'readline/promises'


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const income = Number(await rl.question("How much is your income?"))
const expense = 562.99

const profit =  income - expense
//console.log(`Profit: ${income-expense}`)

const profitFormatado = profit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
console.log(`Profit: ${profitFormatado}`)

rl.close()
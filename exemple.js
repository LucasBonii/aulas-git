const income = 1250.85
const expense = 562.99

const profit =  income - expense
//console.log(`Profit: ${income-expense}`)

const profitFormatado = profit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(`Profit: ${profitFormatado}`)
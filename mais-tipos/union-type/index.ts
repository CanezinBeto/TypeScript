// Declarando uma função union type, que pode aceitar dois ou mais tipos de dados.
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é U$ ${balance}`)
}

showBalance(10000.0)
showBalance('10000.00')

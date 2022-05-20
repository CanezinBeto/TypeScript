"use strict";
// Declarando uma função union type, que pode aceitar dois ou mais tipos de dados.
function showBalance(balance) {
    console.log(`O saldo da conta é U$ ${balance}`);
}
showBalance(10000.0);
showBalance('10000.00');
// Avançando em union types
// Dependendo do tipo de entrada em um parâmetro podemos retornar coisas diferentes.
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return `Este usuário é proibido`;
    }
    return `Este usuário é ${role}`;
}
console.log(showUserRole('Admin'), showUserRole(false));

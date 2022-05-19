"use strict";
// Type guard quando temos situações que podemos receber dois ou mais tipos de dados
// podemos então tratar esses dados para que o retorno seja o esperado.
function sum(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        console.log(`${Number(a) + Number(b)}`);
    }
    else
        console.log(`${a + b}`);
}
// Usando o typeof posso garantir que minha função vai retornar o esperado.
sum('6', 7);
sum(8, 9);
sum(4, '6');
sum('6', '5');

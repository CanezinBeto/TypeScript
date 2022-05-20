"use strict";
// Parâmetros que tem um argumento por padrão
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 15));

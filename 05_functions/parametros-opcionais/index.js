"use strict";
// Incluindo parâmetros opcionais
function moderGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}`;
}
console.log(moderGreeting('Alberto'));

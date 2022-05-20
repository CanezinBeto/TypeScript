"use strict";
// Podemos inserir uma função como argumento, e podemos dar um tipo para esse callback
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Alberto');

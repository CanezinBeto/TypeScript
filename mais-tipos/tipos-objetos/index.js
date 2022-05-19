"use strict";
// Tipando um objeto
function passCoordinates(coord) {
    console.log(`X coordinates: ${coord.x}`);
    console.log(`Y coordinates: ${coord.y}`);
}
passCoordinates({ x: 202, y: 60 });
// Declarando um objeto de forma mais verbosa
const pessoaObjs = {
    nome: 'Alberto',
    sobreNome: 'Canezin',
};
// Propriedades adicionais
// Uma função ou um objeto pode ter propriedades opcionais e declamos com '?' interrogação
// Para evitar que aparece qualquer coisa indesejada, podemos verificar se o elemento existe
function showNumbers(a, b, c) {
    console.log(`A: ${a}`);
    if (b)
        console.log(`B: ${b}`);
    if (c)
        console.log(`C: ${c}`);
}
// Validando uma parâmetros opcional
// Por padrão o primeiro argumento de uma função não pode ser opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        console.log(`Olá, ${firstName} ${lastName}, tudo bem?`);
        return;
    }
    console.log(`Olá, ${firstName}, tudo bem?`);
}

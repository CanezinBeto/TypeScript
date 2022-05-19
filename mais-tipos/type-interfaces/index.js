"use strict";
// Declarar uma interface é muito parecido com um objeto
// Uma vantagem é que podemos declar varios objetos diferentes com uma mesma interface
// sem precisar se preocupar com o objeto original
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoords(coordObj);
const somePerson = {
    name: 'Alberto',
    age: 32,
};
console.log(somePerson);
// Se tentarmos incrementar esse objeto criado com type alias ao longo do nosso código vai dar erro
/*
type personType = {
  age: number
}
*/

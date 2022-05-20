"use strict";
// Generics é quando o tipo de retorno está ligado ao tipo de argumento
function firstElement(array) {
    return array[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['A', 'B', 'C']));
console.log(firstElement(['A', 1, true]));
// Função para unir objetos
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObject = mergeObjects({ name: 'Alberto' }, { age: 32, job: 'Programmer' });
console.log(newObject);

"use strict";
// Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemão');
// Contruindo uma função para tratar melhor a raça do cão
// Tipando a função com a classe dog, e fazendo narrowing com o operador in
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro é vira lata`);
    }
}
showDogDetails(turca);
showDogDetails(bob);

// Operador in
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var turca = new Dog('Turca');
var bob = new Dog('Bob', 'Pastor Alemão');
// Contruindo uma função para tratar melhor a raça do cão
// Tipando a função com a classe dog, e fazendo narrowing com o operador in
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("O cachorro \u00E9 da ra\u00E7a ".concat(dog.breed));
    }
    else {
        console.log("O cachorro \u00E9 vira lata");
    }
}
showDogDetails(turca);
showDogDetails(bob);

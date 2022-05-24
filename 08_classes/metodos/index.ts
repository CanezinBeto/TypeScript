// Métodos são funções que inserimos em objetos, classes
class Dwarf {
  name

  constructor(name: string) {
    this.name = name
  }

  // Métodos de uma classe
  greeting() {
    console.log('Hey Stranger!')
  }
}

const jimmy = new Dwarf('Jimmy')
console.log(jimmy.name)
jimmy.greeting()

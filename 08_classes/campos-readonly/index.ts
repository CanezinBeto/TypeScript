// Campos Readonly
class Car {
  name
  readonly wheels1 = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca1 = new Car('Fusca')

fusca1.name = 'Fusca Turbo'

// Não podemos alterar uma propriedade readonly
// fusca1.wheels1 = 6

// Accessors decorators
function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value
  }
}

class Monster31 {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // Mudando como o javascript se comporta
  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`
  }

  get showAge() {
    return `Idade do monstro: ${this.age}`
  }
}

const charmander = new Monster31('Charmander', 10)
console.log(charmander)

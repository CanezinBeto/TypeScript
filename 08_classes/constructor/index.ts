// Constructor é uma função que nos dá a possibilidade de iniciar um objeto com valores nos seus campos
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const alberto2 = new NewUser('Alberto', 32)

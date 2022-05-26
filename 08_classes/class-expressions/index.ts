// Class Expressions
const myClass02 = class<T> {
  name

  constructor(name: T) {
    this.name = name
  }
}

const pessoa = new myClass02('Alberto')
console.log(pessoa)
console.log(pessoa.name)

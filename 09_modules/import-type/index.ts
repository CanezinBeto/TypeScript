// Importando type's
import { Human } from './myType'
class User4 implements Human {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const jhon = new User4('Jhon', 25)
console.log(jhon)

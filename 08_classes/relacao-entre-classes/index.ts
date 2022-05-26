// Relação entre classes
class Dog01 {
  name!: string
}

class Cat01 {
  name!: string
}

// Podemos instanciar uma classe baseada em outra que tem as mesmas configurações.
const doguinho02: Dog01 = new Cat01()
console.log(doguinho02)

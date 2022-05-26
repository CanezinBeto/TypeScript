// Abstract Class
abstract class AbstractClass {
  abstract showName(): void
}

// Não podemos instanciar um novo objeto através de uma classe abstrata.
// const newObj = new AbstractClass()

class AbstractExemple extends AbstractClass {
  name

  constructor(name: string) {
    super()
    this.name = name
  }

  showName(): void {
    console.log(`O nome é: ${this.name}`)
  }
}

// Agora podemos instanciar um novo objeto
const newAbstractObject = new AbstractExemple('Alberto')
console.log(newAbstractObject.showName())

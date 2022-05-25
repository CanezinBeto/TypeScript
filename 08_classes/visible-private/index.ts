// Vsibilidade privada
class PrivateClass {
  private name = 'Privado'

  showName() {
    return this.name
  }

  private priveteMethod() {
    console.log('Método privado')
  }

  showPrivateMethod() {
    this.priveteMethod()
  }
}

const pObj = new PrivateClass()

console.log(pObj.showName())
pObj.showPrivateMethod()

class TestingPrivate extends PrivateClass {
  // Não podemos acessar métodos privados
  /*
  myMethod() {
    this.privateMethod()
  }
  */
}

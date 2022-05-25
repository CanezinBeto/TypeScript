// Visibilidade protegida
class E {
  protected x = 10

  protected protectedMethod() {
    console.log('Este método é protegido')
  }
}

class F extends E {
  // Com o protected só podemos ver as propriedades ou métodos através de métodos.
  showX() {
    console.log(`X: ${this.x}`)
  }

  showProtectedMethod() {
    this.protectedMethod()
  }
}

const fInstance = new F()
console.log(fInstance.showX())
console.log(fInstance.showProtectedMethod())
